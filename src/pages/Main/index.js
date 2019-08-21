import React, { Component } from 'react';

// Styles
import { Container, CardPerguntas } from './styles';
// Components
import Header from './../../components/Header';

export default class Main extends Component {

    state = {
        asks: {
            title: '',
            ask: 'Você está com dificuldades em conciliar sua vida pessoal e carga de trabalho. Seu gestor propõe que você tire alguns dias de folga para se reestabelecer, entretanto, você perderá um projeto muito importante. Analisando a possibilidade, o melhor é tirar a folga necessária.',
            answerType: 'choices',
            answerOpt: [
                'Discordo totalmente',
                'Discordo parcialmente',
                'Não concordo, nem discordo',
                'Concordo parcialmente',
                'Concordo totalmente'
            ]
        }
    }

    render() {
        const { asks } = this.state;

        return (
            <>
                <Header />

                <Container>
                    <CardPerguntas>
                        <div className="pags">
                            {asks.map((ask, index) => (
                                <a href="#" key={index}></a>
                            ))}
                        </div>
                        <div className="info">
                            <h1>Pergunta 1</h1>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </span>
                        </div>
                        <div className="resp">
                            <textarea></textarea>
                        </div>
                        <div className="btns">
                            <button>Pergunta anterior!</button>
                            <button>Próxima pergunta!</button>
                        </div>
                    </CardPerguntas>
                </Container>
            </>
        )
    }

}