import React, { Component, Fragment } from 'react';
import { Checkbox } from 'primereact/checkbox';
import { find } from 'lodash';

// Styles
import { Container, CardPerguntas } from './styles';
// Components
import Header from './../../components/Header';

export default class Main extends Component {

    state = {
        question: {}, // store the question the user is
        questions: [ // store all questions from the backend
            {
                id: 1,
                title: '',
                question: 'Você está com dificuldades em conciliar sua vida pessoal e carga de trabalho. Seu gestor propõe que você tire alguns dias de folga para se reestabelecer, entretanto, você perderá um projeto muito importante. Analisando a possibilidade, o melhor é tirar a folga necessária.',
                answerType: 'choices',
                answer: ''
            },
            {
                id: 2,
                title: '',
                question: 'Um colega de trabalho está precisando da sua ajuda em uma tarefa. Os seus próprios prazos também estão apertados. Você escolhe ajudar seu colega e levar trabalho para casa.',
                answerType: 'choices',
                answer: ''
            },
            {
                id: 3,
                title: '',
                question: 'Você tem uma ideia que promete mudar processos e ajudar a empresa de forma geral. O clima está tenso, houveram diversas demissões e todos estão apreensivos. Você esta receoso(a) que sua ideia vá causar má impressão aos gestores. Você prefere então guardar a ideia para um momento mais oportuno. ',
                answerType: 'write',
                answer: ''
            },
        ],
        answerOpt: [ // store all options from the backend
            {
                id: 1,
                label: 'Discordo totalmente'
            },
            {
                id: 2,
                label: 'Discordo parcialmente'
            },
            {
                id: 3,
                label: 'Não concordo, nem discordo'
            },
            {
                id: 4,
                label: 'Concordo parcialmente'
            },
            {
                id: 5,
                label: 'Concordo totalmente'
            }
        ],
        answers: [] // store the user answers
    }

    componentDidMount() {
        const answers = [];
        this.state.questions.map(question => answers.push({ idQuestion: question.id, answer: null }))

        this.setState({ answers, question: { ...this.state.questions[0], index: 0 } });
    }

    // Form
    handleChangeQuestion = index => {
        console.log(`Change to index -> ${index}`);

        this.setState({ question: { ...this.state.questions[index], index } });
    }

    // Answers
    handleSelectAnswer = (answer, question) => {
        const answers = this.state.answers.map(data => {
            if(data.idQuestion === question.id) return { idQuestion: question.id, answer: answer.id }
            else return data;
        })

        this.setState({ answers });
    }
    handleTextAnswer = (e, question) => {
        const answers = this.state.answers.map(data => {
            if(data.idQuestion === question.id) return { idQuestion: question.id, answer: e.target.value }
            else return data;
        })

        this.setState({ answers });
    }

    render() {
        const { questions, question, answers, answerOpt } = this.state;

        return (
            <Fragment>
                <Header />
                <Container>
                    <CardPerguntas>
                        <div className="pags">
                            {questions.map((_ask, index) => (
                                <button className={question.index === index ? 'active' : ''} onClick={() => this.handleChangeQuestion(index)} key={index}></button>
                            ))}
                        </div>
                        <div className="info">
                            <h1>Pergunta { question.index + 1 }</h1>
                            <span>{question.question}</span>
                        </div>
                        <div className="resp">
                            {
                                question.answerType === 'choices' 
                                ? (answerOpt.map((answer, index) => (
                                    <Fragment key={index}>
                                        {JSON.stringify(answers[question.index].answer === answer.id)}
                                        <Checkbox 
                                            inputId={`answer${index}`} 
                                            value={answer.id} 
                                            onChange={() => this.handleSelectAnswer(answer, question)} 
                                            value={answers[question.index].answer === answer.id}></Checkbox>
                                        <label htmlFor={`answer${index}`} className="p-checkbox-label">{answer.label}</label><br />
                                    </Fragment>
                                )))
                                : (<textarea placeholder="Sua resposta aqui!" onChange={e => this.handleTextAnswer(e, question)}></textarea>)
                            }
                        </div>
                        <div className="btns">
                            <button type="button">Pergunta anterior!</button>
                            <button type="button">Próxima pergunta!</button>
                        </div>
                    </CardPerguntas>
                </Container>
            </Fragment>
        )
    }

}