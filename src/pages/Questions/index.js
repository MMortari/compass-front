import React, { Component, Fragment } from 'react';
import { Checkbox } from 'primereact/checkbox';
import { InputTextarea } from 'primereact/inputtextarea';
import { FaArrowRight, FaArrowLeft, FaCheckCircle } from 'react-icons/fa'; 
import { find } from 'lodash';

// Styles
import { Container, CardPerguntas, CardRespostas } from './styles';
// Components

// Services
import api from '../../services/api';

const pageUrl = '/questions';

export default class Questions extends Component {

    state = {
        question: {}, // store the question the user is
        questions: [ // store all questions from the backend
            // {
            //     id: 1,
            //     title: '',
            //     question: 'Você está com dificuldades em conciliar sua vida pessoal e carga de trabalho. Seu gestor propõe que você tire alguns dias de folga para se reestabelecer, entretanto, você perderá um projeto muito importante. Analisando a possibilidade, o melhor é tirar a folga necessária.',
            //     answerType: 'choices',
            //     answer: ''
            // },
            // {
            //     id: 2,
            //     title: '',
            //     question: 'Um colega de trabalho está precisando da sua ajuda em uma tarefa. Os seus próprios prazos também estão apertados. Você escolhe ajudar seu colega e levar trabalho para casa.',
            //     answerType: 'choices',
            //     answer: ''
            // },
            // {
            //     id: 3,
            //     title: '',
            //     question: 'Você tem uma ideia que promete mudar processos e ajudar a empresa de forma geral. O clima está tenso, houveram diversas demissões e todos estão apreensivos. Você esta receoso(a) que sua ideia vá causar má impressão aos gestores. Você prefere então guardar a ideia para um momento mais oportuno. ',
            //     answerType: 'write',
            //     answer: ''
            // },
        ],
        answerOpt: [ // store all options from the backend
            // {
            //     id: 1,
            //     label: 'Discordo totalmente'
            // },
            // {
            //     id: 2,
            //     label: 'Discordo parcialmente'
            // },
            // {
            //     id: 3,
            //     label: 'Não concordo, nem discordo'
            // },
            // {
            //     id: 4,
            //     label: 'Concordo parcialmente'
            // },
            // {
            //     id: 5,
            //     label: 'Concordo totalmente'
            // }
        ],
        answers: [], // store the user answers
        loading: true,
        isAnswer: false,
    }

    async componentDidMount() {
        const { data: questionsResponse } = await api.get('/questions');
        const { data: answersOptResponse } = await api.get('/answerOpt');

        const answers = await questionsResponse.map(question => ({ idQuestion: question.id, answer: null }));
        
        const { question } = this.props.match.params;
        let startQuestion = 0;
        let isAnswer = false;

        console.log("is number -> ", question, !isNaN(parseInt(question)), typeof question, typeof parseInt(question))
        if(!isNaN(parseInt(question))) {
            if(question >= 1 && question <= questionsResponse.length) {
                startQuestion = question - 1;
            }
        } else {
            isAnswer = true;
        }

        await this.setState({ 
            answers, 
            answerOpt: answersOptResponse, 
            questions: questionsResponse, 
            question: { ...questionsResponse[startQuestion], index: startQuestion },
            loading: false,
            isAnswer
        });
    }

    // Form
    handleChangeQuestion = index => {
        console.log(`Change to index -> ${index}`);

        this.setState({ question: { ...this.state.questions[index], index } });
    }
    handlePrevQuestion = () => {
        const { index } = this.state.question;

        this.props.history.push(`${pageUrl}/${index}`);

        if(index > 0) this.handleChangeQuestion(index - 1);
    }
    handleNextQuestion = () => {
        const { index } = this.state.question;
        const qtdeQuestions = this.state.questions.length - 1;

        this.props.history.push(`${pageUrl}/${index + 2}`);

        if(index !== qtdeQuestions) this.handleChangeQuestion(index + 1);
    }
    handleGoToQuestion = nthQuestion => {
        const qtdeQuestions = this.state.questions.length - 1;
        this.props.history.push(`${pageUrl}/${nthQuestion + 2}`);

        if(nthQuestion !== qtdeQuestions) this.handleChangeQuestion(nthQuestion - 1);
    }
    handleFinishQuestion = () => {
        this.props.history.push(`${pageUrl}/answers`);
        this.setState({ isAnswer: true });
    }

    // Answers
    handleSelectAnswer = (answer, question) => {
        const answers = this.state.answers.map(data => {
            if(data.idQuestion === question.id) return { idQuestion: question.id, answer: answer.id };
            else return data;
        })

        this.setState({ answers });
    }
    handleTextAnswer = (e, question) => {
        const answers = this.state.answers.map(data => {
            if(data.idQuestion === question.id) return { idQuestion: question.id, answer: e.target.value };
            else return data;
        })

        this.setState({ answers });
    }

    render() {
        const { questions, question, answers, answerOpt, isAnswer } = this.state;

        console.log(this.state);

        return (
            <Fragment>
                <Container>
                    { 
                        !isAnswer ? (
                            <CardPerguntas>
                                <div className="pags">
                                    {questions.map((_ask, index) => (
                                        <button className={question.index === index ? 'active': ''} onClick={() => this.handleChangeQuestion(index)} key={index}></button>
                                    ))}
                                </div>
                                <div className="info">
                                    <h1>Pergunta { question.index + 1 }</h1>
                                    <span>{question.question}</span>
                                </div>
                                <div className="resp row">
                                    {
                                        question.answerType === 'choices' 
                                        ? (answerOpt.map((answer, index) => (
                                            <div className="resp-options col text-center" key={index}>
                                                <Checkbox 
                                                    inputId={`answer${index}`} 
                                                    value={answer.id} 
                                                    onChange={() => this.handleSelectAnswer(answer, question)} 
                                                    checked={answers[question.index].answer === answer.id}></Checkbox><br />
                                                <label htmlFor={`answer${index}`} className="p-checkbox-label">{answer.label}</label><br />
                                            </div>
                                        )))
                                        : (<InputTextarea placeholder="Sua resposta aqui!" onChange={e => this.handleTextAnswer(e, question)} value={answers[question.index] ? answers[question.index].answer : ''} autoResize={true} />)
                                    }
                                </div>
                                <div className="btns d-flex align-items-end">
                                    { question.index !== 0 ? (
                                        <button type="button" onClick={this.handlePrevQuestion}><FaArrowLeft size={15} />Pergunta anterior!</button>
                                    ) : (
                                        <span></span>
                                    )}
                                    { question.index < questions.length - 1 && (
                                        <button type="button" onClick={this.handleNextQuestion}>Próxima pergunta! <FaArrowRight size={15} /></button>
                                    ) }
                                    { question.index === questions.length - 1 && (
                                        <button type="button" onClick={this.handleFinishQuestion}>Encerrar Perguntas! <FaCheckCircle size={15} /></button>
                                    ) }
                                </div>
                            </CardPerguntas>
                        ) : (
                            <CardRespostas>
                                <h1>Minhas respostas</h1>

                                <ul>
                                    {questions && questions.map((data, index) => (
                                        <li key={data.id} onClick={() => this.handleGoToQuestion(data.id)}>
                                            <h2>Pergunta { index + 1 }</h2>
                                            <p>{data.question}</p>
                                            <span>
                                                { 
                                                    data.tanswerType === "choices" 
                                                    ? find(answerOpt, ['id', find(answers, ['idQuestion', data.id]).answer]).label 
                                                    : find(answers, ['idQuestion', data.id]).answer 
                                                }
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </CardRespostas>
                        )
                    }

                </Container>
            </Fragment>
        )
    }

}