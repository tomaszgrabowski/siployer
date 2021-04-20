export type SortBy = {
    type: SortableHeader,
    asc: boolean
}

export type SortableHeader = 'city' | 'temperature' | 'summary' | 'visual';
