import blindUsingPhone from '@/assets/misc/videos/blind-using-phone.png'
import electronicsInOil from '@/assets/misc/videos/electronics-in-oil.png'
import inkjetPrinter from '@/assets/misc/videos/inkjet-printer.png'
import membraneKeyboard from '@/assets/misc/videos/membrane-keyboard.png'
import noiseCancelling from '@/assets/misc/videos/noise-cancelling.png'
import raytracingExcel from '@/assets/misc/videos/raytracing-excel.png'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { Grid } from '@/components/Grid'
import { Miscellaneous } from '@/components/Miscellaneous'

export default function Videos() {
    return (
        <main>
            <Breadcrumbs
                items={[
                    { href: '/misc', label: 'Разное' },
                    { href: '/misc/videos', label: 'Видео' },
                ]}
            />
            <Container>
                <h1>Видео</h1>
                <Grid>
                    <Miscellaneous
                        href="https://drive.google.com/file/d/13dXpwFtZy4KcgNzI80WaN5YUCv68SXib/view"
                        thumbnail={electronicsInOil}
                        title="Как техника работает в масле?"
                        description="Наглядная демонстрация работы электроники в масле."
                    />
                    <Miscellaneous
                        href="https://drive.google.com/file/d/1tgVHvUeAHyKrDx2kElZPsCAjSLhqHHPa/view"
                        thumbnail={membraneKeyboard}
                        title="Мембранная клавиатура"
                        description="Узнайте принцип работы мембранной клавиатуры."
                    />
                    <Miscellaneous
                        href="https://drive.google.com/file/d/1rJRIeHCBiQWJ44xM2jlwwzzcAft2LYwi/view"
                        thumbnail={raytracingExcel}
                        title="Трассировка лучей в Excel"
                        description="Демонстрация трёхмерной трассировки лучей в Excel."
                    />
                    <Miscellaneous
                        href="https://drive.google.com/file/d/1TxUrg2g28turAR6gAM-wOt6pINfLnnmp/view"
                        thumbnail={noiseCancelling}
                        title="Шумоподавление"
                        description="Как работает шумоподавление"
                    />
                    <Miscellaneous
                        href="https://drive.google.com/file/d/1tsOV0vAzZWiGvKH2WOr-ZlL6fOLEEyaU/view"
                        thumbnail={blindUsingPhone}
                        title="Доступность"
                        description="Как незрячий человек пользуется смартфоном."
                    />
                    <Miscellaneous
                        href="https://drive.google.com/file/d/17ox1HIm_6uk3H2tcSY83-oKF2oFc5049/view"
                        thumbnail={inkjetPrinter}
                        title="Струйный принтер"
                        description="Принцип работы струйного принтера."
                    />
                </Grid>
            </Container>
        </main>
    )
}
