export interface ChatMessage {
    role: 'system' | 'user' | 'assistant';
    text: string;
}