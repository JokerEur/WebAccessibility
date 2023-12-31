# IAHD Web Accessibility Hackathon [![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Задача
Целью хакатона являлось улучшение доступности веб-приложений в интернете на примере торговых площадок.

Мы разработали свой прототип маркетплейса, решая задачу как и с помощью дополнительного функционала, так и с помощью изначально правильно проработанного интерфейса. Нами было изучено руководство по обеспечению доступности веб-контента [WCAG 2.0](http://www.w3.org/TR/WCAG20/). Мы поставили целью по максимуму охватить основные принципы доступности: воспринимаемость, управляемость, понятность и надежность. Разработанный нами accessibility функционал может быть свободно интегрирован и в уже существующие маркетплейсы.

>Текстовые данные для наполнения прототипа контентом были собраны вручную, а фотографии сгенерированы локально моделью машинного обучения.

## Демо
[Ссылка на демо-видео прототипа](https://drive.google.com/file/d/1rIUbims1dzlzeDi3ESrsX6Ff2huoVPU1/view?usp=sharing)

## Технологии 

Этот проект использует набор современных технологий для создания мощного и гибкого веб-приложения. Ниже приведены ключевые компоненты, которые помогают нам достичь наших целей:

#### Flask

- **Легкий и быстрый**: Flask - это микрофреймворк, который обеспечивает высокую производительность и быструю загрузку страниц, что делает его идеальным выбором для веб-приложений.
- **Модульность и гибкость**: Flask позволяет разрабатывать приложения, выбирая только необходимые компоненты, что делает код более легким и понятным.
- **Интеграция**: Flask легко интегрируется с другими библиотеками и инструментами, что делает его универсальным решением для разработки различных веб-проектов.
#### React

- **Компонентная архитектура**: React базируется на компонентах, что упрощает создание переиспользуемых элементов интерфейса и повышает поддерживаемость проекта.
- **Быстродействие**: React использует виртуальную DOM для эффективного обновления пользовательского интерфейса и быстрого рендеринга компонентов.
- **Отладка**: React предоставляет инструменты разработчика для удобной отладки компонентов и приложения в целом.
#### SQLite

- **Легкость и встроенность**: SQLite встраивается непосредственно в ваше приложение, что упрощает развертывание и управление базой данных.
- **Переносимость**: Базы данных SQLite легко переносятся между разными операционными системами и архитектурами.
- **Транзакции и ACID-совместимость**: SQLite обеспечивает согласованность данных, поддерживает транзакции и соответствует стандартам ACID.

#### Docker

- **Изолированность**: Контейнеры позволяют изолировать приложение и его зависимости от окружения хост-системы, что уменьшает конфликты и обеспечивает надежность.
- **Легкость развертывания**: Docker-контейнеры легко развертываются на любом хосте, что обеспечивает консистентность окружения как на разработческой машине, так и на сервере.
- **Масштабируемость**: Docker упрощает масштабирование приложений и обеспечивает гибкость в управлении ресурсами.

## Запуск приложения
Эта инструкция позволит запустить приложение, используя Docker, на операционных системах Linux и Windows.

> Убедитесь, что Docker уже установлен на вашей машине. Если Docker не установлен, вы можете скачать его с [официального сайта Docker](https://www.docker.com/get-started/).

### Шаг 1: Клонировать репозиторий
Если у вас еще нет локальной копии репозитория, клонируйте его из Git-репозитория:

```bash
git clone https://github.com/JokerEur/WebAccessibility.git
cd WebAccessibility
```
### Шаг 2: Запустить Docker Compose
Теперь используем Docker Compose для создания и запуска контейнеров нашего приложения.

#### На Linux:
```bash
docker-compose up --build
или  
docker-compose up --build -d
```

#### На Windows:
```bash
docker-compose up --build 
или  
docker-compose up --build -d
```
### Шаг 3: Проверить работоспособность
Теперь приложение должно быть доступным и готово к использованию по адресу:

**Linux**: 
http://localhost:5173

**Windows**: 
http://localhost:5173

### Шаг 4: Остановить контейнеры (использовав docker-compose up --build -d)
Чтобы остановить контейнеры, выполните следующую команду:

```bash
docker-compose down
```
Это завершит работу всех контейнеров, связанных с приложением.
