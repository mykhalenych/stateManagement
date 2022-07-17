import {selector} from "recoil";
import {dataRecoil} from './dataRecoil';
import {fetchWrap} from "../api";
import {recoilConstants} from "./constants";

export const currentDataState = selector({
    key: recoilConstants.dataRecoil,
    get: async ({get}) => {
        try {
            const res = await fetchWrap(get(dataRecoil));
            return {url: res.message}
        } catch (err) {
            const {message} = err || "";
            return {error: message}
        }
    },
});
