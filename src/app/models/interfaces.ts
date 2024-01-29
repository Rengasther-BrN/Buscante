export interface Livro {
    title?: string,
    authors?: string[],
    publisher?: string,
    publishedDate?: Date,
    description?: string
    previewLink? : string,
    thumbnail?: ImageLinks
}

export interface VolumeInfo {
    title: string,
    authors: string[],
    publisher: string,
    publishedDate: Date,
    description: string
}

export interface ImageLinks {
    smallThumbnail: string,
    thumbnail: string,
    small: string,
    medium: string,
    large: string,
    extraLarge: string
}

export interface Item {
    volumeInfo: VolumeInfo
}

export interface LivrosResultado {
    items: Item[],
    totalItems: number
}