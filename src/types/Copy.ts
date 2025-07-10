import { ModalVersion } from './Modal';

export type Copy = {
    copyID: number;
    bookID: number;
    status: string;
    memberID: number;
    dueBack: string;
    memberName: string;
};

export const CopyColumns = [
    { key: 'copyID', label: 'Copy ID', content: (copy: Copy) => copy.copyID, button: {}, isButton: false },
    { key: 'memberName', label: 'Member Name', content: (copy: Copy) => copy.memberName, button: {}, isButton: false },
    { key: 'dueBack', label: 'Due Back', content: (copy: Copy) => copy.dueBack, button: {}, isButton: false },
    {
        key: 'deleteButton',
        label: '',
        content: () => null,
        button: {
            label: 'Delete',
            action: ModalVersion.DELETECOPY
        },
        isButton: true
    }
] as const;
