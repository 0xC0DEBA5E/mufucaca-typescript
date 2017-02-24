var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Cordova, Plugin } from 'ionic-native';
import { Observable } from 'rxjs/Observable';
export { Card } from './card';
var MufuCaCa = (function () {
    function MufuCaCa() {
    }
    /**
     * Registers an event listener for the read results of the plugin.
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    MufuCaCa.addReadResultListener = function (onSuccess, onFailure) { return; };
    /**
     * Registers an event listener for the nfc adapter states of the plugin.
     * (see https://developer.android.com/reference/android/nfc/NfcAdapter.html#EXTRA_ADAPTER_STATE)
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    MufuCaCa.addAdapterStateListener = function (onSuccess, onFailure) { return; };
    /**
     * Registers an event listener for tags matching any tag type.
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    MufuCaCa.addTagDiscoveredListener = function (onSuccess, onFailure) { return; };
    /**
     * Show the NFC settings on the device.
     * @returns {Promise<any>}
     */
    MufuCaCa.showSettings = function () { return; };
    /**
     * Check if NFC is available and enabled on this device.
     * @returns {Promise<any>}
     */
    MufuCaCa.enabled = function () { return; };
    return MufuCaCa;
}());
__decorate([
    Cordova({
        observable: true,
        successIndex: 0,
        errorIndex: 3,
        clearFunction: 'removeReadResultListener',
        clearWithArgs: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Function]),
    __metadata("design:returntype", Observable)
], MufuCaCa, "addReadResultListener", null);
__decorate([
    Cordova({
        observable: true,
        successIndex: 0,
        errorIndex: 3,
        clearFunction: 'removeAdapterStateListener',
        clearWithArgs: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Function]),
    __metadata("design:returntype", Observable)
], MufuCaCa, "addAdapterStateListener", null);
__decorate([
    Cordova({
        observable: true,
        successIndex: 0,
        errorIndex: 3,
        clearFunction: 'removeTagDiscoveredListener',
        clearWithArgs: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Function]),
    __metadata("design:returntype", Observable)
], MufuCaCa, "addTagDiscoveredListener", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MufuCaCa, "showSettings", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MufuCaCa, "enabled", null);
MufuCaCa = __decorate([
    Plugin({
        pluginName: 'MufuCaCa',
        plugin: 'cordova-plugin-mufucaca',
        pluginRef: 'window.MufuCaCa',
        repo: 'https://github.com/0xC0DEBA5E/cordova-plugin-mufucaca.git',
    })
], MufuCaCa);
export { MufuCaCa };
//# sourceMappingURL=mufucaca.js.map