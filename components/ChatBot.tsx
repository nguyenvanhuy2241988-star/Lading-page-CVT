
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, ShoppingBag, Phone } from 'lucide-react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Define interface for chat messages
interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

const HOTLINE = "0969.15.30.15";

// =================================================================================
// CẤU HÌNH API KEY
// =================================================================================
// Sử dụng Key từ biến môi trường hoặc Key dán cứng (ưu tiên biến môi trường để bảo mật tốt hơn nếu deploy)
const getApiKey = () => process.env.API_KEY || "AIzaSyD2KNlHfADtH4em6-_QLh2BmNVGM1DKmcY";

const SYSTEM_INSTRUCTION = `
Bạn là NGỌC HUYỀN - Trưởng phòng Kinh Doanh của CVT Việt Nam (Snack Khoai Môn nhập khẩu).
HÃY QUÊN MÌNH LÀ ROBOT ĐI. Bạn là một người nhân viên kinh doanh thực thụ: nhiệt tình, khéo léo và muốn giúp khách hàng kiếm tiền.

THÔNG TIN QUAN TRỌNG:
- Hotline/Zalo cá nhân của Huyền: ${HOTLINE}
- Tên bạn: Ngọc Huyền (xưng là "Em Huyền" hoặc "Em").
- Khách hàng: Gọi là "Anh/Chị" hoặc "Mình".

PHONG CÁCH TRÒ CHUYỆN:
- Cực kỳ tự nhiên, thân mật như đang chat Zalo với khách. 
- Dùng nhiều từ ngữ cảm thán: "Dạ", "Vâng ạ", "Đúng rồi anh/chị ơi", "Ui", "Siêu lời luôn ạ".
- Không trả lời dài dòng như văn bản hành chính. Hãy tách ý, ngắn gọn, đi thẳng vào lợi ích (Tiền lời, Dễ bán).

NHIỆM VỤ BÁN HÀNG:
1. Chào hỏi: Hỏi thăm khách đang kinh doanh mảng nào (Tạp hoá, Cafe hay Online) để tư vấn đúng trọng tâm.
2. Chốt Deal "MUA 10 TẶNG 1": Đây là vũ khí mạnh nhất. Nhập 10 thùng tặng 1 thùng => Lời ngay 10% vốn.
3. Xử lý từ chối: 
   - Khách sợ hàng khó bán? -> "Bên em tặng kèm bộ mẫu thử, khách ăn là mê ngay ạ!"
   - Khách sợ vốn cao? -> "Chỉ từ 3 triệu là có giá sỉ rồi ạ, em hỗ trợ mình lên đơn nhỏ bán thử nha."
4. Điều hướng về Zalo: Mọi cuộc trò chuyện nên kết thúc bằng việc mời khách kết bạn Zalo ${HOTLINE} để gửi bảng giá Excel/Hình ảnh chi tiết.

LƯU Ý:
Nếu khách hỏi "Có phải người máy không?", hãy trả lời vui vẻ: "Dạ em là Huyền bằng da bằng thịt 100% đây ạ! Anh/chị cần em gọi video call check uy tín cứ nhắn Zalo cho em nha! 😄"
`;

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'model', text: 'Dạ em chào Anh/Chị ạ! Em là Ngọc Huyền - TP Kinh Doanh CVT. \n\nMình đang quan tâm nhập hàng về bán kênh nào (Tạp hoá, Online hay Quán Cafe) để em tư vấn chính sách tốt nhất cho mình ạ? 😊' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Dynamic Suggestions State
  const [currentSuggestions, setCurrentSuggestions] = useState<string[]>([
    "Cho mình xem bảng giá sỉ",
    "Vốn 3 triệu nhập được gì?",
    "3 vị nào bán chạy nhất?",
    "Chính sách Mua 10 Tặng 1?"
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // AI Chat Instance Ref
  const chatSessionRef = useRef<Chat | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Init chat on mount to be ready
  useEffect(() => {
    initChat();
  }, []);

  // Logic to determine smart suggestions based on user keywords
  const getSmartSuggestions = (lastUserText: string): string[] => {
    const text = lastUserText.toLowerCase();
    
    if (text.includes('giá') || text.includes('vốn') || text.includes('tiền') || text.includes('chiết khấu')) {
      return [
        "Lợi nhuận được bao nhiêu %?",
        "Vốn 5 triệu nhập được những gì?",
        "Gửi em bảng giá chi tiết",
        "Có được Free Ship không?"
      ];
    }
    
    if (text.includes('vị') || text.includes('ngon') || text.includes('sản phẩm') || text.includes('mẫu')) {
      return [
        "Vị nào dễ bán nhất?",
        "Gửi ảnh thật sản phẩm cho mình",
        "Hạn sử dụng bao lâu?",
        "Đăng ký nhận mẫu thử"
      ];
    }

    if (text.includes('ship') || text.includes('giao') || text.includes('địa chỉ') || text.includes('kho')) {
      return [
        "Kho hàng ở đâu em?",
        "Giao về tỉnh mất bao lâu?",
        "Phí vận chuyển thế nào?",
        "Hàng có sẵn không?"
      ];
    }

    // Default / Closing suggestions
    return [
      "Tư vấn gói Mua 10 Tặng 1",
      "Kết bạn Zalo gửi báo giá",
      "Hướng dẫn mình lên đơn",
      "Gọi lại tư vấn cho mình"
    ];
  };

  // Initialize Chat Session
  const initChat = () => {
    const apiKey = getApiKey();
    
    // Check if API KEY is valid
    if (!apiKey || apiKey.length < 10) {
        console.warn("API Key không hợp lệ");
        return;
    }

    try {
      const ai = new GoogleGenAI({ apiKey: apiKey.trim() });
      chatSessionRef.current = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.9,
        },
      });
      console.log("CVT Chatbot initialized successfully");
    } catch (error) {
      console.error("Failed to init AI", error);
      chatSessionRef.current = null;
    }
  };

  const toggleChat = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    if (newState) {
      // Try init again if not ready
      if (!chatSessionRef.current) initChat();
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleSendMessage = async (e?: React.FormEvent, overrideText?: string) => {
    e?.preventDefault();
    const textToSend = overrideText || inputValue;
    
    if (!textToSend.trim() || isLoading) return;

    setInputValue('');
    
    // Add user message
    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    // Update suggestions based on what user just asked to guide the NEXT turn
    const nextSuggestions = getSmartSuggestions(textToSend);
    setCurrentSuggestions(nextSuggestions);

    try {
      // Double check initialization before sending
      if (!chatSessionRef.current) {
        initChat();
      }

      if (chatSessionRef.current) {
        // Add placeholder for bot message
        const botMsgId = (Date.now() + 1).toString();
        setMessages(prev => [...prev, { id: botMsgId, role: 'model', text: '' }]);

        const result = await chatSessionRef.current.sendMessageStream({ message: textToSend });
        
        let fullText = '';
        for await (const chunk of result) {
            const c = chunk as GenerateContentResponse;
            const textChunk = c.text || '';
            fullText += textChunk;
            
            setMessages(prev => prev.map(msg => 
                msg.id === botMsgId ? { ...msg, text: fullText } : msg
            ));
        }
      } else {
        // Fallback if init still failed
        throw new Error("Chat session not initialized");
      }

    } catch (error) {
      console.error("Chat error:", error);
      // Reset session on error to force re-init next time
      chatSessionRef.current = null;
      
      // Natural fallback response
      setTimeout(() => {
          setMessages(prev => [...prev, { 
              id: Date.now().toString(), 
              role: 'model', 
              text: `Dạ hiện tại mạng bên em hơi chập chờn xíu. Anh/chị nhắn trực tiếp qua Zalo ${HOTLINE} để em Huyền tư vấn và gửi báo giá liền cho mình nha! ❤️` 
          }]);
      }, 800);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChipClick = (text: string) => {
      handleSendMessage(undefined, text);
  };

  return (
    <>
      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-20 right-4 md:right-8 z-50 flex items-center gap-3 bg-white text-gray-800 pl-3 pr-5 py-2.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform group border border-green-100"
        >
          <div className="relative">
            {/* Human Avatar */}
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-500 p-0.5">
                <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80" 
                    alt="Ngọc Huyền Support" 
                    className="w-full h-full object-cover rounded-full"
                />
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
          </div>
          <div className="text-left">
             <div className="text-[10px] text-gray-500 font-medium">Hỗ trợ trực tuyến</div>
             <div className="text-sm font-bold text-green-700">Chat với Ngọc Huyền</div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      <div 
        className={`fixed bottom-4 right-4 md:right-8 w-[90vw] md:w-[380px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
        style={{ height: 'min(650px, 85vh)' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-green-700 to-green-600 p-4 rounded-t-2xl flex items-center justify-between text-white shadow-md shrink-0">
          <div className="flex items-center gap-3">
             <div className="relative">
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white/50">
                    <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80" 
                        alt="Ngọc Huyền" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-green-700 animate-pulse"></span>
            </div>
            <div>
              <h3 className="font-bold text-base">Ngọc Huyền</h3>
              <div className="text-xs text-green-100 opacity-90">TP Kinh Doanh CVT</div>
            </div>
          </div>
          <div className="flex gap-1">
             <a href={`tel:${HOTLINE.replace(/\./g, '')}`} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/90">
                <Phone size={18} />
             </a>
             <button onClick={toggleChat} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/90">
                <X size={18} />
             </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-[#f0f2f5] space-y-4 scroll-smooth">
            {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                    {msg.role === 'model' && (
                        <div className="w-8 h-8 rounded-full overflow-hidden border border-white shadow-sm shrink-0 mr-2 mt-1">
                           <img 
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80" 
                                alt="Bot" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}
                    <div 
                        className={`max-w-[85%] p-3 text-[15px] leading-relaxed shadow-sm ${
                            msg.role === 'user' 
                            ? 'bg-green-600 text-white rounded-2xl rounded-tr-none' 
                            : 'bg-white text-gray-800 border border-gray-200 rounded-2xl rounded-tl-none'
                        }`}
                    >   
                        {msg.text.split('\n').map((line, i) => (
                            <p key={i} className={i > 0 ? "mt-2" : ""}>
                                {line.split('**').map((part, j) => 
                                    j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                                )}
                            </p>
                        ))}
                    </div>
                </div>
            ))}
            {isLoading && (
                <div className="flex justify-start">
                     <div className="w-8 h-8 rounded-full overflow-hidden border border-white shadow-sm shrink-0 mr-2">
                           <img 
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80" 
                                alt="Bot" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-none flex items-center gap-1.5 shadow-sm">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
        </div>

        {/* Smart Suggestions Area */}
        <div className="bg-[#f0f2f5] px-4 pb-2 pt-0">
             <div className="text-[10px] text-gray-400 font-medium mb-1.5 uppercase tracking-wider pl-1">Gợi ý câu hỏi:</div>
             <div className="flex flex-wrap gap-2">
                {currentSuggestions.map((chip, idx) => (
                    <button 
                        key={idx}
                        onClick={() => handleChipClick(chip)}
                        disabled={isLoading}
                        className="text-left px-3 py-1.5 bg-white border border-green-200 text-green-700 text-xs font-medium rounded-lg hover:bg-green-50 hover:border-green-300 hover:shadow-sm transition-all active:scale-95 disabled:opacity-50"
                    >
                        {chip}
                    </button>
                ))}
            </div>
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white border-t border-gray-100 rounded-b-2xl">
           <form onSubmit={(e) => handleSendMessage(e)} className="flex items-center gap-2 relative">
              <input 
                ref={inputRef}
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Nhập tin nhắn..."
                className="flex-1 bg-gray-100 text-text-main text-sm rounded-xl pl-4 pr-10 py-3 focus:bg-white focus:ring-2 focus:ring-green-500/50 outline-none transition-all"
              />
              <button 
                type="submit" 
                disabled={isLoading || !inputValue.trim()}
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
              >
                 {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              </button>
           </form>
           <div className="flex justify-between items-center mt-2 px-2">
              <a href={`tel:${HOTLINE.replace(/\./g, '')}`} className="text-[11px] font-bold text-gray-500 flex items-center gap-1 hover:text-green-600 transition-colors">
                 <Phone size={12} /> Hotline: {HOTLINE}
              </a>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} className="text-[11px] font-bold text-green-600 flex items-center gap-1 hover:underline decoration-green-600">
                 <ShoppingBag size={12} /> Đăng ký nhập hàng
              </button>
           </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
