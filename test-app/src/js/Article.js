/**
 * Created by Vika on 30.03.2017.
 */
import React, { Component } from 'react';
import './../css/Article.css'

class Article extends Component {
    render() {
        return (
            <div className="main">
                <h1>Small text on important topic</h1>
                <ul>
                    <li>Интересно. Что такое React?</li>
                    <li>Это — очень крутая библиотека, сделанная ребятами из Facebook. Она реально дает полный контроль и повышает производительность приложения, позволяя очень легко обрабатывать любые изменения представлений.</li>
                    <li>Звучит заманчиво. Могу ли я использовать React для отображения данных с сервера?</li>
                    <li>Ага, но сначала нужно добавить React и React DOM в виде библиотек.</li>
                    <li>Ну, одна — это сама библиотека, а вторая — для манипулирования DOM, который ты теперь можешь описать в JSX.</li>
                    <li>JSX? Что такое JSX?</li>
                    <li>JSX — это просто расширение синтаксиса JavaScript, который выглядит очень похоже на XML. Это своего рода еще один способ описать DOM. Думай о нем, как об улучшенном HTML.</li>
                    <li>Что случилось с HTML?</li>
                    <li>Это 2016. Никто больше не пишет на сыром HTML.</li>
                </ul>
                <a href="https://habrahabr.ru/post/312022/">https://habrahabr.ru/post/312022/</a>
            </div>);
    }
}
export default Article;