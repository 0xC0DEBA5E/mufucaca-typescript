'use strict';
/**
 * Holds the data which is read from the Campus-Card.
 */
var Card = (function () {
    function Card(cardNumber, currentBalance, lastBalance, cardIssuer, cardType) {
        this._cardNumber = cardNumber;
        this._currentBalance = currentBalance;
        this._lastBalance = lastBalance;
        this._cardIssuer = cardIssuer;
        this._cardType = cardType;
        this._lastTransaction = currentBalance - lastBalance;
    }
    Object.defineProperty(Card.prototype, "cardNumber", {
        get: function () {
            return this._cardNumber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "currentBalance", {
        get: function () {
            return this._currentBalance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "lastBalance", {
        get: function () {
            return this._lastBalance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "lastTransaction", {
        get: function () {
            return this._lastTransaction;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "cardIssuer", {
        get: function () {
            return this._cardIssuer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "cardType", {
        get: function () {
            return this._cardType;
        },
        enumerable: true,
        configurable: true
    });
    return Card;
}());
export { Card };
//# sourceMappingURL=card.js.map