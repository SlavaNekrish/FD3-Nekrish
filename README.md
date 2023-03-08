## Описание

Курсы «Разработка веб-приложений на React» [ FD3 ]

## Домашние задания

### Задание № 1

1. Проект [ishop](https://github.com/SlavaNekrish/FD3-Nekrish/tree/master/Homework1/ishop). Ссылка на [пример работы](----).

- Создать проект ishop (интернет-магазин) в папке ishop.
- Задать массивом список товаров в интернет-магазине, по каждому товару должны храниться как минимум название, цена, URL фотографии, сколько единиц товара осталось на складе.
- Написать React-компонент, отображающий таблицу с этим списком товаров. Компонент должен получать название магазина и массив товаров через props.
- Задать типы для props компонента.
- При разработке компонента максимально использовать forEach и другие методы обработки массивов.

### Задание № 2

1. Проект [filter](https://github.com/SlavaNekrish/FD3-Nekrish/tree/master/Homework2/filter).

- Создать проект filter (фильтр) в папке filter.
- Компоненту в props передаётся массив строк. Он отображает их в виде вертикального прокручивающегося списка.
- Выше списка отображается поле текстового ввода, птичка (checkbox) и кнопка сброса.
- При вводе текста в поле в списке остаются только те строки, которые содержат введённый текст.
- При установке птички строки отображаются в алфавитном порядке, при снятии — в том же порядке, в каком они расположены в массиве.
- При нажатии кнопки "сброс" состояние птички и текстового поля сбрасывается, список приходит в первоначальное состояние.

2. Проект [ishop2](https://github.com/SlavaNekrish/FD3-Nekrish/tree/master/Homework2/ishop2).

- На основе проекта ishop разработать проект ishop2 (интернет-магазин) в папке ishop2.
- Должно быть описано два компонента — «Магазин» и «Товар».
- Один из товаров может быть сделан «выбранным» щелчком в любое место строки. Строка выбранного товара выделяется цветом.
- В каждой строке с товаром — кнопка «удалить».
- По нажатию кнопки «удалить» у пользователя запрашивается подтверждения удаления (confirm) и товар удаляется.

### Задание № 3

1. Проект [ishop3](https://github.com/SlavaNekrish/FD3-Nekrish/tree/master/Homework3/shop3/shop3). Ссылка на [пример работы](----).

- На основе проекта ishop2 разработать проект ishop3 (интернет-магазин) в папке ishop3.
- Переработать проект для сборку под npm.
- Разбить проект на модули (каждый компонент в отдельном файле).
- Переработать описание классов компонентов на синтаксис ES6.
- Использовать JSX.
- Перечень товаров вынести в JSON-файл.
- Доработать поведение:
  > - При щелчке на строку с товаром она не только выделяется цветом, но и снизу (или справа) от таблицы товаров отображается карточка товара.
  > - В каждой строке с товаром — кнопки «редактировать» и «удалить». Ниже списка товаров — кнопка «новый».
  > - По нажатию кнопки «редактировать» строка товара выделяется и карточка товара переходит в режим редактирования с кнопками «сохранить» и «отмена»:
  > - при любых изменениях полей валидируется правильное заполнение полей (по любым правилам); сообщения об ошибках отображаются возле неправильно заполненных полей;
  > - при невалидном заполнении полей кнопка «сохранить» недоступна;
  > - если кликнуть на другую строку — должен включиться режим просмотра карточки этого товара (если в редактируемую сейчас карточку не были внесены изменения, иначе клик игнорируется);
  > - если кликнуть на кнопку «редактировать» другого товара — сразу включается редактирование карточки этого товара (если в редактируемую сейчас карточку не были внесены изменения, иначе нажатие кнопки игнорируется либо кнопка запрещается);
  > - все кнопки «удалить» и кнопка «новый» должны быть запрещены.
- По нажатию кнопки «новый» карточка товара переходит в режим добавления (пустая форма) с кнопками «добавить» и «отмена»:
  > - валидация работает аналогично;
  > - клики по строкам товаров не должны ничего делать;
  > - выделенной цветом строки товара не должно быть;
  > - все кнопки «удалить», «редактировать» и «новый» должны быть запрещены.

### Задание № 4

1. Проект [RainbowFrame](https://github.com/SlavaNekrish/FD3-Nekrish/tree/master/Homework4/RainbowFrame). Ссылка на [пример работы](-----).

- Разработать новый проект RainbowFrame в папке RainbowFrame.
- Компонент RainbowFrame должен получать в props массив цветов и строить несколько вложенных рамочек, по одной на каждый цвет (в любом порядке). Внутри рамочек должно быть то содержание, которое вложено в тег RainbowFrame.

2. Проект [br2jsx](-----). Ссылка на [пример работы](-----).

- Разработать компонент, который:
  > - получает ОДИН props, содержащий многострочный текст, разбитый на тегами `<br>`, `<br/>` или `<br />`;
  > - отображает этот многострочный текст внутри себя, разбитый тегами `<br>`.
- Не использовать стилевое свойство white-space и теги, стилизованные этим стилевым свойством.
- Не использовать React-атрибут dangerouslySetInnerHTML.

### Задание № 5

1. Проект [RainbowFrameHOC](------). Ссылка на [пример работы](------).

- На основе проекта RainbowFrame разработать новый проект RainbowFrameHOC в папке RainbowFrameHOC.
- Возможность обернуть компонент в несколько цветных рамок должна быть реализована в виде HOC withRainbowFrame. Цвета рамочек задаются массивом цветов. Внутри рамочек должно быть то содержание, которое вложено в оборачиваемый тег.
- Дополнительно:
  > 1. Разработать обычный React-компонент DoubleButton, который рендерит две кнопки `<input type=button>` и между ними - текст, пришедший в props.children. Компонент получает три пропса - caption1 и caption2 это надписи на кнопках, cbPressed - коллбек, при нажатии на первую кнопку коллбек вызывается с аргументом 1, при нажатии на вторую - с аргументом 2. Разместите компонент на странице, заставьте его работать. Тексты на кнопках и между кнопками могут быть любыми.
  >    Например:
  >
  > ```html
  > <DoubleButton caption1="однажды" caption2="пору" cbPressed={ num => alert(num) } >в студёную зимнюю</DoubleButton>
  > ```
  >
  > 2. Разработать HOC withRainbowFrame, который позволяет рендерить оборачиваемый компонент внутри нескольких цветных рамок.
  >    Например:
  >
  > ```js
  > let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];
  > ```
  >
  > ```js
  > let FramedDoubleButton = withRainbowFrame(colors)(DoubleButton);
  > ```
  >
  > ```html
  > <FramedDoubleButton caption1="я из лесу" caption2="мороз" cbPressed={ num => alert(num) }>вышел, был сильный</FramedDoubleButton>
  > ```

### Задание № 6

1. Проект [Mobile](-----). Ссылка на [пример работы](------).

- Реализовать кнопки добавления, удаления, изменения фамилий и балансов клиентов. При работе с полями форм использовать ссылки (ref) а не двунаправленный binding (onChange+setState).
- Коллбеки (для внесения изменений в список клиентов) не использовать, использовать EventEmitter.
- Реализовать кнопки фильтрации всех, заблокированных, активных клиентов.
- Использовать только PureComponent, логгировать все вызовы render в консоль.
- Компонент «клиент» должен получать именно ссылку на хэш с информацией о клиенте, а не реквизиты клиента отдельно.
- Иммутабельность данных обеспечить нативным JavaScript либо любым пакетом — на выбор.

2. 
- В проект Mobile добавить тесты всех функций — добавления, изменения, удаления клиентов, фильтрации.
- Кнопки переключения "МТС" и "Velcom" убрать.

### Задание № 7
1. Проект [Scales](-----). Ссылка на [пример работы](-----).
- Разработать класс Весы (Scales), имеющий:
> - массив добавленных на весы Продуктов (объектов класса Product);
> - метод add для добавления нового Продукта на весы;
> - метод getSumScale для получения суммарного веса добавленных Продуктов;
> - метод getNameList для получения списка наименований добавленных Продуктов в виде массива.
- Добавляемые методом add Продукты (объекты класса Product) должны иметь методы getScale и getName.
- Разработать минимум два различных класса продуктов (например, Яблоко (Apple) и Помидор (Tomato)), наследующих от - - Product методы getScale и getName.

- Создать объект класса Весы.
- Создать несколько объектов классов Яблоко, Помидор и т.д. с различными именами и весами, добавить их на весы, выдать в консоль результат работы методов getSumScale и getNameList.

### Задание № 8
1. Проект [Scales2](------). Ссылка на [пример работы](-----).
- Создать проект Scales2 (весы) на основе проекта Scales.
- Обеспечить наличие у яблок и помидор методов getScale и getName не наследованием от класса Product, а реализацией интерфейса IScalable.

2. Проект [Scales3](------). Ссылка на [пример работы](-----).
- Класс Scales должен быть параметризован StorageEngine — способом хранения добавленных на весы элементов.
- StorageEngine должен реализовывать интерфейс IStorageEngine с методами addItem(item), getItem(index), getCount().
- Разработать несколько классов с различными способами хранения:
> - ScalesStorageEngineArray — для хранения в Array<тип>;
> - ScalesStorageEngineLocalStorage — для хранения в localStorage.
- Создать несколько Весов с различными способами хранения, добавить на каждые весы несколько элементов, выдать в консоль результат работы методов getSumScale и getNameList.

- Продукты не делить на яблоки/помидоры, работать просто с классом Product.
- Ни сами весы, ни механизмы хранения не нужно параметризовать тем, что именно в них хранится, «захардкодить» что хранится именно Product.
- В классе Product публичных свойств не использовать, только публичные методы.

## Авторы

Разработчик - [Некриш Вячеслав Владимирович](https://vk.com/vjachaslau).
