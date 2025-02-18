import { TextDocument } from "@/features/documents/model/text-document-model"

export const TextDocumentApi = {
    async create(content: string): Promise<TextDocument> {
        const response = await fetch(`/api/text-documents`, {
            method: "POST",
            headers: { "content-type": "application/json; charset=utf-8" },
            body: JSON.stringify({ content }),
        })

        return response.json()
    },

    async get(): Promise<TextDocument[]> {
        const response = await fetch(`/api/text-documents/`, {
            method: "GET",
        })

        return response.json()
    },

    async getById(id: string): Promise<TextDocument> {
        const response = await fetch(`/api/text-documents/${id}`, {
            method: "GET",
        })

        return response.json()
    },

    async update(id: string, values: TextDocument): Promise<TextDocument> {
        const response = await fetch(`/api/text-documents/${id}`, {
            method: "PATCH",
            headers: { "content-type": "application/json; charset=utf-8" },
            body: JSON.stringify(values),
        })

        return response.json()
    },

    async delete(id: string): Promise<TextDocument> {
        const response = await fetch(`/api/text-documents/${id}`, {
            method: "DELETE",
        })

        return response.json()
    },
} as const
