import profile from '@/assets/profile.webp'
import { Card } from '@/components/Card'
import { ContactLink } from '@/components/ContactLink'
import { Container } from '@/components/Container'
import { contacts } from '@/content/contacts/contacts'

export default function Contacts() {
    return (
        <main>
            <Container>
                <Card
                    image={profile}
                    imageAlt="Скотников Вадим Борисович"
                    imageWidth={256}
                    imageHeight={256}
                >
                    <h1>Скотников Вадим Борисович</h1>
                    <Container>
                        {contacts.map((c) => (
                            <ContactLink
                                key={c.href}
                                href={c.href}
                                icon={c.icon}
                                text={c.text}
                            />
                        ))}
                    </Container>
                </Card>
            </Container>
        </main>
    )
}
