
### ШРИ 2018. Новые возможности JavaScript

  

## Запуск

```

npm clone git@github.com:vit134/lesson-10.git && cd lesson-10

npm build

npm start

```

  
## Реализация

Для реализации сервера использовал nodejs + express
В тестовом примере, первым запросом к api giphy.com получаю массив гифок, вторым запросом получаю рандомную гифку, в функции-обработчике ищу в результате предыдущего запроса гифку с id полученнной из текущего запроса, если такая нашлась добавляю её в DOM.

Третий и четвертый запрос отправляю просто на сервер (не смог придумать что то еще), сервер эмитирует бурную деятельность и отдает результат. 
Ответы от них придуманные и не несут смысловой нагрузки.

  

Метод **get** класса Request принимает аргументы:

	 @param {string} url : url запроса

	 @param {function} onResolve : функция успешного выполнения запроса

	 @param {function} onReject : функция не успешного выполнения запроса
	 
Функция **onResolve** принимает аргументы:

	@param {any} lastResult : результат последнего запроса
	@param {any} result : результат текущего запроса		
Функция **onReject** принимает аргументы:

	@param {any} error: ошибка

В случае ошибки цепочка прерывается в том месте где она произошла.