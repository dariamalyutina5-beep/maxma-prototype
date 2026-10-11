# Ассеты

Файл: `J5O8dq0z1hB7ba68lMvQYn` (Maxmasite) → секция `69:801`: фреймы
**Главная** `14:128` (1440 × 8208) и **Рассылки — UI / 1440** `20:1467`.

Всё ниже уже выгружено и лежит в `assets/img/`. Если в макете что-то
поменялось — экспортируйте тот же узел @2x и положите поверх под тем же
именем, код трогать не нужно.

Слот в разметке называет ассет, а не файл (`data-asset="case-study-1"`):
загрузчик сам перебирает `.svg → .png → .webp → .jpg → .jpeg → .webm → .mp4`
и берёт то, что лежит в папке. `.webm`/`.mp4` превращаются в зациклённое
видео. Поэтому при замене формата старый файл нужно удалить — иначе
выиграет тот, что раньше в списке (например, `.svg` перед `.png`).

## Список

| Файл | Node ID | Размер | Где |
|---|---|---|---|
| `logo-maxma.svg` | `14:132` | 124 × 37 | Шапка |
| `hero-monitor.png` | `14:151` | 1148 × 934 | Монитор на первом экране (прозрачный PNG, вырезан из исходника) |
| `hero-dashboard.webm` | — | — | Видео на экране монитора (в макете там статичный скрин `14:152`) |
| `sticker-megaphone/heart/dialogs.png` | `19:1359`, `19:1360`, `19:1362` | 52 × 46, 61 × 53 | Стикеры на мониторе; поворот задаётся в CSS |
| `case-study-1.png`, `case-study-2.png` | `29:456`, `14:252` | 574 × 523 | Карточки кейсов целиком |
| `client-04.png`, `client-05.png` | `14:214`, `14:218` | 225 × 90 | Akhmadullina, Milavitsa — на сером фоне карточки |
| `client-03.svg`, `client-07.svg` | `14:233`, `14:250` | 225 × 90 | Lamoda, Gate31 |
| `arrow-outward.svg` | `29:493` | 24 × 24 | Стрелка в карточках логотипов и в «Больше, чем платформа» |
| `platform-1.png` | `14:300` | 1056 × 590 | Карточка «Сбор данных» целиком |
| `platform-2.png` | `14:314` | 1046 × 590 | Карточка «Коммуникации». В макете обрезана краем фрейма — собрана из слоёв и снята в PNG, см. README |
| `why-1.png` … `why-5.png` | `37:1771` | 574 × 540 | Картинка справа в «Максимум результата», по одной на пункт. Пока есть только `why-1` (из макета) — она стоит под всеми пунктами; положите `why-2` … `why-5`, и они начнут сменяться сами |
| `trust-uptime.png` | `29:1157` | 456 × 540 | «Работаем стабильно 99,9% Uptime» целиком |
| `trust-logos.png` | `29:1164` | 235.5 × 72 | Стопка логотипов в «10 лет на рынке»; чипы «+500 брендов» и «152-ФЗ» — вёрстка |
| `trust-support.png` | `29:1180` | 458 × 542 | «Рядом за 5 минут» целиком (с внешней обводкой) |
| `more-articles/academy/kb.png` | `14:490`, `14:489`, `14:488` | 338 × 187 | Фото в «Больше, чем просто платформа» |
| `sticker-articles/academy/kb.png` | `20:1462`, `20:1461`, `20:1460` | 51 × 50 | Стикеры на этих фото |
| `lead-visual.png` | `14:414` | 692 × 794 | Визуал у формы заявки, стикеры внутри |
| `menu-*.png` | `29:560` … `29:594` | 48 × 42 (рост базы 48 × 39) | Иконки мегаменю «Продукт», вырезаны из спрайта |
| `menu-blob-violet.svg`, `menu-blob-cyan.svg` | `29:600`, `29:601` | — | Размытые пятна в карточке «Не знаете, с чего начать?» |
| `logo-maxma-white.svg` | `27:244` | 94.5 × 28 | Футер |
| `soc-vc.svg`, `soc-yt-tg.svg` | `27:270`, `27:274` | 24 × 22, 84 × 32 | Соцсети в футере |

### Рассылки · `20:1467`

| Файл | Node ID | Размер | Где |
|---|---|---|---|
| `icon-megaphone.png`, `icon-audience.png` | спрайт `Icon pack` | 71 × 62, 52 × 42 | Стикер на первом экране и пара «мегафон + аудитория» в «Работает мощнее в связке»; вырезаны из прозрачного спрайта |
| `comm-hero-laptop.webp`, `comm-hero-screen.jpg` | `75:1916`, `75:1917` | — | Ноутбук и список рассылок на его экране; кроп задаётся в CSS, как в макете |
| `comm-channels.png` | `62:4874` | 136 × 38 | Четыре иконки каналов над «Все коммуникации в одном окне» |
| `comm-telegram/cascade/push.png` | `59:574`, `59:599`, `59:579` | 456 × 540 | Три карточки каналов целиком |
| `trigger-1.png` … `trigger-3.png` | `59:857` | 574 × 540 | Картинка у «Триггерных сценариев», по одной на пункт; в макете есть только первая |
| `segment-1.png` … `segment-3.png` | `62:4728` | 506 × 540 | То же для «Персонализации по сегментам» |
| `bundle-monitor.png`, `bundle-screen.jpg`, `bundle-cdp.png` | `61:1214`, `61:1215`, `61:1212` | — | Монитор, экран и интерфейс CDP в «Работает мощнее в связке» |
| `arrow-small.svg` | `61:1204` | 10.5 × 10.5 | Стрелка в кнопке «Узнать про модуль CDP» |

Кейсы на этой странице — те же `case-study-1/2` и логотипы, что на главной.

Стикеры и монитор нельзя брать обычным экспортом: Figma кладёт их на
непрозрачный фон. Они вырезаны из исходных PNG-спрайтов по кропу из
макета, поэтому прозрачные.

## Шрифты

**Object Sans** (в Figma — *PP Object Sans* / *Object Sans*) лежит в
`assets/fonts/`, подключён через `@font-face`.

**Rubik** (400–500, в макете есть вес 450) — подписка и юридический текст
в футере, подключён с Google Fonts. Для офлайн-показа положите woff2
рядом с Object Sans и добавьте `@font-face`.

**Point Soft** (цифры `+35%`, `+220 000` в кейсах) и **SF Pro**
(уведомления в карточке «Коммуникации») есть только внутри экспортов.

## V4 generated editorial assets
Built-in imagegen used (not CLI). Project files: `assets/img/v4-sport.png`, `v4-kids.png`, `v4-food.png`, `v4-start.png`, `v4-support.png`.
Prompts: premium minimalist studio photography of an unbranded ivory/cobalt running shoe; muted wooden rainbow toy with ivory knitted baby booties; pear, figs, artichokes and olive oil on stone; calm agreement presentation at an oak desk; customer-success specialist at a desktop CRM dashboard. Shared direction: soft daylight, refined material detail, restrained Apple-inspired editorial composition, no text overlays. Support photo edited to display the supplied MAXMA analytics reference, preserving the woman, desk and framing.
`v4-analytics-reference.png` is the user-provided analytics screenshot. Device interfaces are HTML/CSS, with illustrative customer data and shop names. Existing fashion photo is reused once for the fashion email. The original `why-1.png` is now shown on step four.

## V5 assets
The eight `assets/img/v5-{profile,filters,chains,promocodes,mass,triggers,recommendations,personal}.png` files are user-supplied screenshots, preserved as source pixels; CSS frames/crops compose them without inventing product controls.
Built-in imagegen edits: `v5-super.png` removes old baked-in numbers/caption/button while preserving the SuperStep photograph and logo; `v5-cascade.png` removes the old baked-in channel text; `v5-support.png` adds a support headset and screen-sharing video call using the supplied promo-code UI. Prompt constraints: preserve existing photography, person, composition and lighting; change only the requested elements; do not add captions outside the device. Case numbers and all replacement website text/buttons are editable SVG/HTML.


## V6
The screenshots v6-unified.png, v6-quiet.png, v6-ab.png, v6-cart.png were supplied by the user and displayed in HTML/CSS frames.
Generated using built-in imagegen: v6-support.png (two stylish colleagues solving a task together at a laptop, following the supplied editorial references); v6-bg-fixzone.png (retail accessories still life); v6-bg-blcv.png (indigo denim editorial); v6-bg-lji.png (berry silk product still life). Shared prompt: refined realistic photography, no text or logos, dark case-card negative space, subtle violet/cyan lighting. These are illustrative compositions, not documentary photographs of the brands.
Case sources and clickable destinations:
- https://maxma.com/blog/case-fixzone
- https://maxma.com/blog/vyruchka-vyrosla-na-54-keis-blcv
- https://maxma.com/blog/selling-without-discounts-le-journal-intime
Superseded unused visual files have been omitted from this version.
