export type Copy = {
    copyID: number;
    bookID: number;
    status: string;
    memberID: number;
    dueBack: string;
    memberName: string;
};

export const CopyColumns = [
    { key: 'copyID', label: 'Copy ID', content: (copy: Copy) => copy.copyID },
    { key: 'memberName', label: 'Member Name', content: (copy: Copy) => copy.memberID },
    { key: 'dueBack', label: 'Due Back', content: (copy: Copy) => copy.dueBack }
] as const;
