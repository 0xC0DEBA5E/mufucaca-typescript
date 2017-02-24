'use strict';
/**
 * Holds the data which is read from the Campus-Card.
 */
export class Card {
    private _cardNumber: string;
    private _currentBalance: number;
    private _lastBalance: number;
    private _lastTransaction: number;
    private _cardIssuer: string;
    private _cardType: string;

    constructor(cardNumber: string, currentBalance: number, lastBalance: number, cardIssuer: string, cardType: string) {
        this._cardNumber = cardNumber;
        this._currentBalance = currentBalance;
        this._lastBalance = lastBalance;
        this._cardIssuer = cardIssuer;
        this._cardType = cardType;
        this._lastTransaction = currentBalance - lastBalance;
    }

    get cardNumber(): string {
        return this._cardNumber;
    }

    get currentBalance(): number {
        return this._currentBalance;
    }

    get lastBalance(): number {
        return this._lastBalance;
    }

    get lastTransaction(): number {
        return this._lastTransaction;
    }

    get cardIssuer(): string {
        return this._cardIssuer;
    }

    get cardType(): string {
        return this._cardType;
    }
}
