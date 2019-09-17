import * as Web3 from 'web3';
import { reviewContract } from './contract';
import config from '../../config';

const { publicAddress } = config;

const { ABI, address } = reviewContract;

export default class ReviewController {
    private web3;
    private contract;

    constructor() {
        this.web3 = new Web3(Web3.givenProvider);
        this.contract = new this.web3.eth.Contract(ABI, address);
    }

    async getPersonCount(): Promise<number> {
        return this.contract.methods.getPersonCount().call();
    }

    async addPerson(name: string) {
        return this.contract.methods.addPerson(name).send({ from: publicAddress });
    }

    async createReview(to: string, score: number, message: string) {
        return this.contract.methods.createReview(to, score, message).send({ from: publicAddress });
    }

    async getReviewOf(personName: string) {
        return this.contract.methods.getReviewOf(personName).call();
    }

    async person(index: number) {
        return this.contract.methods.persons(index).call();
    }

    async addReviewCreatedListener(listener) {
        this.contract.events.ReviewCreated().on('data', (event) => {
            const data = event.returnValues;
            listener({
                message: data.message,
                name: data.name,
                score: data.score
            })
        });
    }

    async getReviewData() {
        const count = await this.getPersonCount();
        const persons = [];
        for (let i = 0; i < count; i++) {
            const name = await this.person(i);
            const reviews = await this.getReviewOf(name);
            persons.push({ name, reviews });
        }
        return persons;
    }

}