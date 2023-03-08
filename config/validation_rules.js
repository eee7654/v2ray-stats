import { ruleNotIn } from 'simple-body-validator'

const sessionBase = {
    uID : ['nullable', 'integer'],
    uNAM : ['nullable', 'string'],
    status : ['required','integer',ruleNotIn([3,4,5])]
}