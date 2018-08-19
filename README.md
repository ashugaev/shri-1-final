# Задание 1 — найди ошибки


## Ошибки

1. В index.js. В самом начале некорректно прописан инпорт. Т.к. импортируем только одну константу, а не модуль целиком заключаем "initMap" в фигурные скобки.
1. В консоли ошибок нет, появилось сообщение inited. В html видно, что появилось содержимое в яндекс карт, но у него нулевая высота. Смотрим процесс установки карт, там вторым шагом идет создание контейнера с размерами. Прописываем размеры для нашего контейнера в файле стилей. Карта появилась.
1. На карте ничего нет. Проверяю корректность настроек. У нас не хватает  привязки objectManager к myMap. На эране все равно ничего нет. Проверяю корректность входных данных и их запись в наш объект. Оказывается перепутаны местами широта и долгота. Исправляем и метки появляются на экране🤗
1. Метки группируются в кластеры, но кластеры не корректно настроены. Нам нужно, что бы по ним было видно, что внутри есть сломанные. Подойдет макет "default#pieChart". В настройках он удазан, но дальше он задается снова и перекрывается на "islands#greenClusterIcons", убираю строку с повторным присвоением макета и иконки меняются на те, что надо.
1. Дальше нужно сделать сообщение при клике на метку. Сейчас ничего не появляется и выдается ошибка. Нужно разобраться в функции обработки клика. Сравниваю с примерами в песочнице, вроде все корректно. Возможно проблема в получении контента. Ставлю в коммент изменение контента в обработке клика, ничего не меняется. Комментирую geoObjectBalloonContentLayout в настройках менеджера объектов и ошибка исчезает. Открывается пустой балун как и ожидалось. Значит есть проблема в получении контента. Иду в функцию getDetailsContentLayout, после внимательного осмотра вызывает подозрение стрелочная фунция в bind. Внутри исользуется this, в таком случаем у нас this будет привязан к родительнской функции, возможно такого быть не должно, меняю это на обычную функцию "build(){}" и у нас появилась надпись "Идет загрузка данных". Судя по условию в шаблоне балуна дело в полученных данных. Убираю коммент, который ставил раньше в обработке клика на запись данных балуна и появляется контент. 
1. 



## Пункты для самопроверки:

1. Приложение должно успешно запускаться.✅
1. По адресу http://localhost:9000 должна открываться карта с метками.✅
1. Должна правильно работать вся функциональность, перечисленная в условиях задания.✅
1. Не должно быть лишнего кода.✅
1. Все должно быть в едином codestyle.✅