import { Contact } from '@/content/utils'
import { Mail, Phone, Send } from 'lucide-react'

// Поля:
// - href (string): Ссылка на контакт.
// - icon (Icon):   Иконка. См. библиотеку lucide-react.
// - text (string): Текст контакта.
export const contacts: Contact[] = [
    {
        href: 'https://t.me/vadimbs_369',
        icon: Send,
        text: '@VadimBS_369',
    },
    {
        href: 'mailto:skotnikovvb@licey369.ru',
        icon: Mail,
        text: 'SkotnikovVB@licey369.ru',
    },
    {
        href: 'tel:+79117751614',
        icon: Phone,
        text: '+7 (911) 775-16-14',
    },
]
