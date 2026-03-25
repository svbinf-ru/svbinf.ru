import akinator from '@/assets/misc/websites/akinator.webp'
import autodraw from '@/assets/misc/websites/autodraw.webp'
import beziergame from '@/assets/misc/websites/beziergame.webp'
import cablemap from '@/assets/misc/websites/cablemap.webp'
import excalidraw from '@/assets/misc/websites/excalidraw.webp'
import fakeupdate from '@/assets/misc/websites/fakeupdate.webp'
import flightradar from '@/assets/misc/websites/flightradar.webp'
import freemp3cloud from '@/assets/misc/websites/freemp3cloud.webp'
import geektyper from '@/assets/misc/websites/geektyper.webp'
import generatedPhotos from '@/assets/misc/websites/generated-photos.webp'
import googleTimelapse from '@/assets/misc/websites/google-timelapse.webp'
import hackertyper from '@/assets/misc/websites/hackertyper.webp'
import iconbird from '@/assets/misc/websites/iconbird.webp'
import ilovepdf from '@/assets/misc/websites/ilovepdf.webp'
import iss from '@/assets/misc/websites/iss.webp'
import kandinsky from '@/assets/misc/websites/kandinsky.webp'
import monkeytype from '@/assets/misc/websites/monkeytype.webp'
import msdosGames from '@/assets/misc/websites/msdos-games.webp'
import nealFun from '@/assets/misc/websites/neal-fun.webp'
import neuralLove from '@/assets/misc/websites/neural-love.webp'
import pwned from '@/assets/misc/websites/pwned.webp'
import qrmania from '@/assets/misc/websites/qrmania.webp'
import randomtools from '@/assets/misc/websites/randomtools.webp'
import ritmoteka from '@/assets/misc/websites/ritmoteka.webp'
import storyset from '@/assets/misc/websites/storyset.webp'
import thisPersonDoesNotExist from '@/assets/misc/websites/this-person-does-not-exist.webp'
import youdotcom from '@/assets/misc/websites/youdotcom.webp'
import vocalremover from '@/assets/misc/websites/vocalremover.webp'
import pathfinding from '@/assets/misc/websites/pathfinding.webp'
import theTrueSize from '@/assets/misc/websites/the-true-size.webp'
import ui from '@/assets/misc/websites/ui.webp'
import unislide from '@/assets/misc/websites/unislide.webp'
import virustotal from '@/assets/misc/websites/virustotal.webp'
import visper from '@/assets/misc/websites/visper.webp'
import wheelDecide from '@/assets/misc/websites/wheeldecide.webp'
import winningSolitaire from '@/assets/misc/websites/winning_solitaire.webp'
import xpression from '@/assets/misc/websites/xpression.webp'
import donottell from '@/assets/misc/websites/donottell.webp'

import { Misc } from '@/content/utils'

// Поля:
// - href        (string):          Ссылка на ресурс
//                                  (статью, программу, видео или сайт).
// - thumbnail   (StaticImageData): Превью ресурса.
// - title       (string):          Название ресурса.
// - description (string):          Описание ресурса.
export const websites: Misc[] = [
    {
        href: 'https://fusionbrain.ai/',
        thumbnail: kandinsky,
        title: 'Kandinsky',
        description:
            'Создавайте изображения и видео за секунды с помощью текстовых описаний.',
    },
    {
        href: 'https://excalidraw.com/',
        thumbnail: excalidraw,
        title: 'Excalidraw',
        description: 'Рисуйте диаграммы и схемы, словно на маркерной доске.',
    },
    {
        href: 'https://ru.akinator.com/',
        thumbnail: akinator,
        title: 'Акинатор',
        description:
            'Игрок должен загадать любого персонажа, а Акинатор — отгадать его.',
    },
    {
        href: 'https://neal.fun',
        thumbnail: nealFun,
        title: 'Neal.fun',
        description: 'Крошечный интернет-уголок',
    },
    {
        href: 'https://www.submarinecablemap.com/',
        thumbnail: cablemap,
        title: 'Submarine Cable Map',
        description: 'Карта морских коммуникаций.',
    },
    {
        href: 'https://www.ilovepdf.com/',
        thumbnail: ilovepdf,
        title: 'ILovePDF',
        description: 'Онлайн-инструменты для работы с PDF-документами.',
    },
    {
        href: 'https://storyset.com/',
        thumbnail: storyset,
        title: 'Storyset',
        description: 'Иллюстрации для ваших презентаций и проектов.',
    },
    {
        href: 'https://bezier.method.ac/',
        thumbnail: beziergame,
        title: 'The Bezier Game',
        description: 'Обучающий игровой тренажёр по построению кривых Безье.',
    },
    {
        href: 'https://wheeldecide.com/',
        thumbnail: wheelDecide,
        title: 'Wheel Decide',
        description: 'Не можете решить? Колесо решает за вас!',
    },
    {
        href: 'https://iconbird.com/',
        thumbnail: iconbird,
        title: 'Iconbird',
        description: 'Русскоязычный аггрегатор бесплатных иконок.',
    },
    {
        href: 'https://qrmania.ru/',
        thumbnail: qrmania,
        title: 'QR mania',
        description:
            'Создание QR-кодов. Сканирование и чтение QR-кодов онлайн с камеры.',
    },
    {
        href: 'https://archive.org/details/softwarelibrary_msdos_games?tab=collection&sort=-downloads',
        thumbnail: msdosGames,
        title: 'Игры для MS DOS',
        description: 'Коллекция игр для MS DOS на портале Internet Archive.',
    },
    {
        href: 'https://monkeytype.com/',
        thumbnail: monkeytype,
        title: 'Monkeytype',
        description:
            'Минималистичный и настраиваемый тренажёр печати с открытым исходным кодом.',
    },
    {
        href: 'https://www.autodraw.com/',
        thumbnail: autodraw,
        title: 'AutoDraw',
        description:
            'Помогает превратить наброски в чёткие и красивые изображения.',
    },
    {
        href: 'https://haveibeenpwned.com/',
        thumbnail: pwned,
        title: 'Have I Been Pwned',
        description:
            'Позволяет пользователям проверять, были ли их личные данные скомпрометированы.',
    },
    {
        href: 'https://virustotal.com/',
        thumbnail: virustotal,
        title: 'VirusTotal',
        description: 'Онлайн-антивирус.',
    },
    {
        href: 'https://www.flightradar24.com',
        thumbnail: flightradar,
        title: 'Flightradar24',
        description: 'Наблюдайте за движением самолётов в прямом эфире.',
    },
    {
        href: 'https://iss.stormway.ru/ru/',
        thumbnail: iss,
        title: 'МКС в прямом эфире.',
        description:
            'Внутренние съемки, когда экипаж выполняет служебные обязанности, а также внешние съемки.',
    },
    {
        href: 'https://earthengine.google.com/timelapse/',
        thumbnail: googleTimelapse,
        title: 'Google Timelapse',
        description:
            'Можно наблюдать, как происходят процессы урбанизации, высыхают озера, тают ледники и т.д.',
    },
    {
        href: 'https://freemp3cloud.com',
        thumbnail: freemp3cloud,
        title: 'Free Mp3 Cloud',
        description: 'Поиск и загрузка миллионов треков в формате .mp3.',
    },
    {
        href: 'https://ritmoteka.ru/',
        thumbnail: ritmoteka,
        title: 'Ритмотека',
        description:
            'Здесь можно определить название песни, просто настучав её мотив на клавиатуре.',
    },
    {
        href: 'https://you.com',
        thumbnail: youdotcom,
        title: 'You.com',
        description: 'Бесплатный ChatGPT в России.',
    },
    {
        href: 'https://visper.tech/',
        thumbnail: visper,
        title: 'Visper',
        description:
            'Обучающие ролики, презентации, новости. Для работы, учёбы, соцсетей. Без съёмок, оборудования и монтажа. Бесплатно.',
    },
    {
        href: 'https://neural.love/',
        thumbnail: neuralLove,
        title: 'neural.love',
        description: 'Единая ИИ-платформа для творцов.',
    },
    {
        href: 'https://thispersondoesnotexist.com/',
        thumbnail: thisPersonDoesNotExist,
        title: 'This Person Does Not Exist',
        description:
            'Генерирует фотографию человека с помощью нейронных сетей.',
    },
    {
        href: 'https://mrdoob.com/#/142/winning_solitaire',
        thumbnail: winningSolitaire,
        title: 'Winning Solitaire',
        description: 'Пасьянс с приколом.',
    },
    {
        href: 'https://hackertyper.net',
        thumbnail: hackertyper,
        title: 'HackerTyper',
        description: 'Притворитесь стереотипным хакером.',
    },
    {
        href: 'https://geektyper.com',
        thumbnail: geektyper,
        title: 'GeekTyper',
        description: 'Создайте рабочую атмосферу хакера или устройте пранк.',
    },
    {
        href: 'https://generated.photos/',
        thumbnail: generatedPhotos,
        title: 'Generated Photos',
        description: 'Уникальные фото, сгенерированные ИИ.',
    },
    {
        href: 'https://xpressioncamera.com/',
        thumbnail: xpression,
        title: 'xpression camera',
        description:
            'Вы можете перемещать человека на изображении или видео в режиме реального времени.',
    },
    {
        href: 'https://randomtools.io',
        thumbnail: randomtools,
        title: 'Random Tools',
        description: 'Утилиты для работы с соц. сетями, рандомом и данными.',
    },
    {
        href: 'https://userinyerface.com/',
        thumbnail: ui,
        title: 'User Inyerface',
        description:
            'Сайт, воплощающий всё худшее в современном дизайне интерфейсов.',
    },
    {
        href: 'https://vocalremover.org/ru/',
        thumbnail: vocalremover,
        title: 'Vocal Remover',
        description: 'Сделать минус из любой песни.',
    },
    {
        href: 'https://thetruesize.com/',
        thumbnail: theTrueSize,
        title: 'The True Size',
        description:
            'Меняет картину мира, показывая истинный размер каждой страны.',
    },
    {
        href: 'https://qiao.github.io/PathFinding.js/visual/',
        thumbnail: pathfinding,
        title: 'PathFinding',
        description:
            'Определение наилучшего, оптимального маршрута между двумя точками.',
    },
    {
        href: 'https://fakeupdate.net/',
        thumbnail: fakeupdate,
        title: 'FakeUpdate',
        description: 'Поддельные обновления операционной системы MS Windows.',
    },
    {
        href: 'https://unislide.io/',
        thumbnail: unislide,
        title: 'Unislide',
        description: 'Проводите интерактивные опросы и викторины',
    },
    {
        href: 'https://gandalf.lakera.ai/do-not-tell',
        thumbnail: donottell,
        title: 'Do-not-tell',
        description: 'Заставьте назвать пароль',
    },
]
