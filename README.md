# Задание 1 — найди ошибки


## ❌ Ошибки

1. В index.js. В самом начале некорректно прописан инпорт. Т.к. импортируем только одну константу, а не модуль целиком заключаем "initMap" в фигурные скобки.
1. В консоли ошибок нет, появилось сообщение inited. В html видно, что появилось содержимое в яндекс карт, но у него нулевая высота. Смотрим процесс установки карт, там вторым шагом идет создание контейнера с размерами. Прописываем размеры для нашего контейнера в файле стилей. Карта появилась.
1. На карте ничего нет. Проверяю корректность настроек. У нас не хватает  привязки objectManager к myMap. На эране все равно ничего нет. Проверяю корректность входных данных и их запись в наш объект. Оказывается перепутаны местами широта и долгота. Исправляем и метки появляются на экране 🤗
1. Метки группируются в кластеры, но кластеры не корректно настроены. Нам нужно, что бы по ним было видно, что внутри есть сломанные. Подойдет макет "default#pieChart". В настройках он удазан, но дальше он задается снова и перекрывается на "islands#greenClusterIcons", убираю строку с повторным присвоением макета и иконки меняются на те, что надо.
1. Дальше нужно сделать сообщение при клике на метку. Сейчас ничего не появляется и выдается ошибка. Нужно разобраться в функции обработки клика. Сравниваю с примерами в песочнице, вроде все корректно. Возможно проблема в получении контента. Ставлю в коммент изменение контента в обработке клика, ничего не меняется. Комментирую geoObjectBalloonContentLayout в настройках менеджера объектов и ошибка исчезает. Открывается пустой балун как и ожидалось. Значит есть проблема в получении контента. Иду в функцию getDetailsContentLayout, после внимательного осмотра вызывает подозрение стрелочная фунция в bind. Внутри исользуется this, в таком случаем у нас this будет привязан к родительнской функции, возможно такого быть не должно, меняю это на обычную функцию "build(){}" и у нас появилась надпись "Идет загрузка данных", так же правлю другую функцию "clear()". Судя по условию в шаблоне балуна дело в полученных данных. Убираю коммент, который ставил раньше в обработке клика на запись данных балуна и появляется контент. 
1. Первое что бросается в глаза это то, что график не постоился. Идем в "chart.js". После прочтения документации становится ясно, что у нас некоррекнто поставлено макцимальное значение по оси Y. У нас 0, при том, что график у нас строится только из положительных значений, соответственно его видно не будет. Меняю на 10. График есть.
1. Вопрос функциональности решен. И перед тем как идти дальше мне хочется добавить немного положительно UX нашему инженеру (т.е. мне) и сделать иконки. Я думаю, что визуально-смысловая связь - это важно) Поэтому разработав неповторимый дизайн я добавляю настройки для иконок в "mappers.js". Иконки есть, но iconCaption почему то переста срабатывать. Т.к. по условиям задачи подпись нам не нужна пока, что откладываю этот вопрос.
1. Делаю проверку на лишний код. У нас есть файл popup.js, который мы нигде не используем. Изначально я получил контент из него, но как оказалось шаблон для балуна есть в mappers и очевидно, что нам нужен именно он, по этому popup.js удалю.
1. Юзаю prettier и Semistandard, что бы поправить codestyle.

## Пункты для самопроверки:

1. Приложение должно успешно запускаться.✅
1. По адресу http://localhost:9000 должна открываться карта с метками.✅
1. Должна правильно работать вся функциональность, перечисленная в условиях задания.✅
1. Не должно быть лишнего кода.✅(Но это не точно)
1. Все должно быть в едином codestyle.✅

## Описание:

1. Всю область экрана занимает интерактивная карта Москвы.✅
1. На карте отображаются места размещения базовых станций.✅
1. Если на небольшом пространстве много объектов, они объединяются в кластер. ✅
1. При клике на кластер карта масштабируется для просмотра объектов, входящих в него.✅
1. Неисправные станции обозначаются на карте красным цветом, исправные — синим.✅
1. Используя фильтр, можно отобразить на карте объекты с нужным состоянием — например, отобразить только неисправные.✅ 
1. Если неисправный объект входит в кластер, то иконка кластера должна показывать, что в нем есть неисправная станция.✅
1. При клике на метку базовой станции появляется попап с информацией о ней: серийный номер, состояние, количество активных дронов, график нагрузки.✅

### Благодарю Вас за интересную задачу и уделенное мне время! Я получил хороший стимул, что бы начать учить node.js 🤝