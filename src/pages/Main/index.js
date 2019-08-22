import React, { Component } from 'react';
import { Checkbox } from 'primereact/checkbox';

// Styles
import { Container, CardPerguntas } from './styles';
// Components
import Header from './../../components/Header';

export default class Main extends Component {

    state = {
        question: 0, // store the index of question the user is
        questions: [ // store all questions from the backend
            {
                title: '',
                question: 'Você está com dificuldades em conciliar sua vida pessoal e carga de trabalho. Seu gestor propõe que você tire alguns dias de folga para se reestabelecer, entretanto, você perderá um projeto muito importante. Analisando a possibilidade, o melhor é tirar a folga necessária.',
                answerType: 'choices',
                answer: ''
            },
            {
                title: '',
                question: 'Um colega de trabalho está precisando da sua ajuda em uma tarefa. Os seus próprios prazos também estão apertados. Você escolhe ajudar seu colega e levar trabalho para casa.',
                answerType: 'choices',
                answer: ''
            },
            {
                title: '',
                question: 'Você tem uma ideia que promete mudar processos e ajudar a empresa de forma geral. O clima está tenso, houveram diversas demissões e todos estão apreensivos. Você esta receoso(a) que sua ideia vá causar má impressão aos gestores. Você prefere então guardar a ideia para um momento mais oportuno. ',
                answerType: 'write',
                answer: ''
            },
        ],
        answerOpt: [
            'Discordo totalmente',
            'Discordo parcialmente',
            'Não concordo, nem discordo',
            'Concordo parcialmente',
            'Concordo totalmente'
        ],
        teste: ''
    }

    componentDidMount() {
        console.log(this.params);
    }

    handleChangeQuestion = index => {
        console.log(`Change to index -> ${index}`);

        this.setState({ question: index });
    }

    render() {
        const { questions, question, answerOpt } = this.state;

        return (
            <>
                <Header />
                <Container>
                    <CardPerguntas>
                        <div className="pags">
                            {questions.map((_ask, index) => (
                                <a className={question === index && 'active'} onClick={() => this.handleChangeQuestion(index)} key={index}></a>
                            ))}
                        </div>
                        <div className="info">
                            <h1>Pergunta { question + 1 }</h1>
                            <span>{questions[question].question}</span>
                        </div>
                        <div className="resp">
                            {
                                questions[question].answerType === 'choices' 
                                ? (answerOpt.map(answer => <p>{answer}</p>))
                                : (<textarea></textarea>)
                            }
                            <Checkbox inputId="cb2" value="San Francisco" onChange={e => this.setState({teste: e.checked})} checked={this.state.teste}></Checkbox>
                            <label htmlFor="cb2" className="p-checkbox-label">San Francisco</label>
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