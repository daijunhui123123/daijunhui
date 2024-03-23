interface IArticle {
    id: number;
    title: string;
    author: string;
    type: string;
    content: string;
    status: string;
    pageviews: number;
    crated_at: string;
}


export type { IArticle }   // 类型定义前面要加type



