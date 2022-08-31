export function setupRegistrar(registryAddress: any): Promise<Registrar>;
export default class Registrar {
    constructor({ registryAddress, ethAddress, legacyAuctionRegistrarAddress, controllerAddress, bulkRenewalAddress, provider }: {
        registryAddress: any;
        ethAddress: any;
        legacyAuctionRegistrarAddress: any;
        controllerAddress: any;
        bulkRenewalAddress: any;
        provider: any;
    });
    permanentRegistrar: any;
    permanentRegistrarController: any;
    legacyAuctionRegistrar: any;
    registryAddress: any;
    bulkRenewal: any;
    ENS: any;
    getAddress(name: any): Promise<any>;
    getText(name: any, key: any): Promise<any>;
    getDeed(address: any): Promise<any>;
    getOracle(address: any): Promise<any>;
    getLegacyEntry(label: any): Promise<{
        deedOwner: string;
        state: number;
        registrationDate: number;
        revealDate: number;
        value: number;
        highestBid: number;
        expiryTime?: undefined;
        error?: undefined;
    } | {
        deedOwner: string;
        state: number;
        registrationDate: number;
        revealDate: number;
        value: number;
        highestBid: number;
        expiryTime: number;
        error: any;
    }>;
    getPermanentEntry(label: any): Promise<false | {
        available: null;
        nameExpires: null;
    }>;
    getEntry(label: any): Promise<{
        currentBlockDate: Date;
        registrant: number;
        transferEndDate: null;
        isNewRegistrar: boolean;
        gracePeriodEndDate: null;
        deedOwner: string;
        state: number;
        registrationDate: number;
        revealDate: number;
        value: number;
        highestBid: number;
        expiryTime?: undefined;
        error?: undefined;
    } | {
        currentBlockDate: Date;
        registrant: number;
        transferEndDate: null;
        isNewRegistrar: boolean;
        gracePeriodEndDate: null;
        deedOwner: string;
        state: number;
        registrationDate: number;
        revealDate: number;
        value: number;
        highestBid: number;
        expiryTime: number;
        error: any;
    }>;
    getGracePeriod(Registrar: any): Promise<any>;
    gracePeriod: any;
    transferOwner(name: any, to: any, overrides?: {}): Promise<any>;
    reclaim(name: any, address: any, overrides?: {}): Promise<any>;
    getRentPrice(name: any, duration: any): Promise<any>;
    getRentPriceAndPremium(name: any, duration: any, block?: string): Promise<{
        price: any;
        premium: any;
    }>;
    getEthPrice(): Promise<number | undefined>;
    getPriceCurve(): Promise<any>;
    getRentPrices(labels: any, duration: any): Promise<any>;
    getMinimumCommitmentAge(): Promise<any>;
    getMaximumCommitmentAge(): Promise<any>;
    makeCommitment(name: any, owner: any, duration: any, secret?: string): Promise<any>;
    checkCommitment(label: any, duration: any, secret?: string): Promise<any>;
    commit(label: any, duration: any, secret?: string): Promise<any>;
    register(label: any, duration: any, secret: any): Promise<any>;
    estimateGasLimit(cb: any): Promise<number>;
    renew(label: any, duration: any): Promise<any>;
    renewAll(labels: any, duration: any): Promise<any>;
    releaseDeed(label: any): Promise<any>;
    isDNSRegistrar(parentOwner: any): Promise<boolean>;
    selectDnsRegistrarContract({ parentOwner, provider }: {
        parentOwner: any;
        provider: any;
    }): Promise<{
        registrarContract: any;
        isOld: boolean;
    }>;
    getDNSEntry(name: any, parentOwner: any, owner: any): Promise<{
        stateError: null;
    }>;
    submitProof(name: any, parentOwner: any): Promise<any>;
    registerTestdomain(label: any): Promise<any>;
    expiryTimes(label: any): Promise<Date | undefined>;
}
//# sourceMappingURL=registrar.d.ts.map