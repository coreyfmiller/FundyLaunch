"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Sparkles, Loader2 } from "lucide-react"

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState<{ role: string; content: string; id: string }[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!input.trim() || isLoading) return

        const userMsg = { role: "user", content: input, id: crypto.randomUUID() }
        const newMessages = [...messages, userMsg]
        setMessages(newMessages)
        setInput("")
        setIsLoading(true)

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: newMessages })
            })

            if (!res.ok || !res.body) {
                setMessages(prev => [...prev, { role: "assistant", content: "Sorry, I'm having trouble connecting. Try again or reach out via our contact page.", id: crypto.randomUUID() }])
                setIsLoading(false)
                return
            }

            const reader = res.body.getReader()
            const decoder = new TextDecoder()
            let done = false
            const botMsgId = crypto.randomUUID()
            setMessages(prev => [...prev, { role: "assistant", content: "", id: botMsgId }])

            while (!done) {
                const { value, done: doneReading } = await reader.read()
                done = doneReading
                const text = decoder.decode(value, { stream: true })
                setMessages(prev => prev.map(m =>
                    m.id === botMsgId ? { ...m, content: m.content + text } : m
                ))
            }
        } catch (error) {
            setMessages(prev => [...prev, { role: "assistant", content: "Sorry, something went wrong. Please try again.", id: crypto.randomUUID() }])
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {!isOpen ? (
                <button
                    onClick={() => setIsOpen(true)}
                    className="flex h-14 items-center gap-2 rounded-full bg-accent px-6 font-semibold text-accent-foreground shadow-2xl ring-4 ring-accent/20 transition-all hover:scale-105 hover:bg-accent/90"
                >
                    <Sparkles className="size-5" />
                    <span className="text-base tracking-wide">Ask Us</span>
                </button>
            ) : (
                <div className="flex h-[500px] w-[350px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl sm:w-[400px]">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-border bg-secondary/50 p-4">
                        <div className="flex items-center gap-3">
                            <div className="hidden rounded-full bg-accent/10 p-2 sm:block">
                                <Sparkles className="size-5 text-accent" />
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-foreground">Fundy Launch</h3>
                                <p className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <span className="size-2 animate-pulse rounded-full bg-green-500" />
                                    Online
                                </p>
                            </div>
                        </div>
                        <button
                            className="size-8 rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                            onClick={() => setIsOpen(false)}
                        >
                            <X className="mx-auto size-5" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 space-y-4 overflow-y-auto bg-background/50 p-4">
                        {messages.length === 0 && (
                            <div className="mt-8 space-y-4 text-center text-sm text-muted-foreground">
                                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-secondary">
                                    <MessageCircle className="size-6 text-accent" />
                                </div>
                                <div>
                                    <p className="mb-1 font-medium text-foreground">Hey there! 👋</p>
                                    <p>Got questions about websites, SEO, or AI search?</p>
                                    <p>Ask away — no pressure.</p>
                                </div>
                            </div>
                        )}

                        {messages.map((m) => (
                            <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                                <div
                                    className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                                        m.role === "user"
                                            ? "rounded-br-sm bg-accent text-accent-foreground"
                                            : "rounded-bl-sm border border-border bg-secondary text-secondary-foreground"
                                    }`}
                                >
                                    {m.role === "user" ? (
                                        m.content
                                    ) : (
                                        <div dangerouslySetInnerHTML={{
                                            __html: m.content
                                                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                                .replace(/\n/g, '<br/>')
                                        }} />
                                    )}
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="flex items-center gap-2 rounded-2xl rounded-bl-sm border border-border bg-secondary px-4 py-3 text-sm">
                                    <Loader2 className="size-4 animate-spin text-accent" />
                                    <span className="text-muted-foreground">Thinking...</span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="border-t border-border bg-card p-4">
                        <form onSubmit={handleSubmit} className="flex items-center gap-2 rounded-full border border-border bg-secondary/30 p-1 pl-4 transition-all focus-within:border-accent/50 focus-within:ring-1 focus-within:ring-accent/50">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask a question..."
                                className="w-full flex-1 border-none bg-transparent py-1.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground transition-all hover:bg-accent/90 disabled:opacity-50"
                            >
                                <Send className="ml-0.5 size-4" />
                            </button>
                        </form>
                        <p className="mt-2 text-center text-xs text-muted-foreground/70">
                            By messaging, you agree to our <a href="/privacy" className="underline hover:text-accent">Privacy Policy</a>.
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}
