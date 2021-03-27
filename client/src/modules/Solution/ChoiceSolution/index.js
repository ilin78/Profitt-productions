import React from "react";
import { connect } from "react-redux";

import JSONList_devices_ru from "../../../../content/locales/ru/devices_ru.json";
import JSONList_devices_en from "../../../../content/locales/en/devices_en.json";
import Accessory from "./Accessory";
import Audio from "./Audio";
import Commutation from "./Commutation";
import FiberSystem from "./FiberSystem";
import Mixing from "./Mixing";
import ModulSystem from "./ModulSystem";
import Stream from "./Stream";
import SyncSystem from "./SyncSystem";
import Video from "./Video";


function ChoiceSolution({ isLanguage }) {
    let list_devices = null;
    if (isLanguage) {
        list_devices = JSONList_devices_ru.ru[0].list_devices;
    } else {
        list_devices = JSONList_devices_en.en[0].list_devices;
    }

    let find_ru = "Есть"
    let find_en = "Yes"
    return (
        <div className="">
            {list_devices.map((list, index) => {
                if (list.div_access === find_ru || list.div_access === find_en) {
                    return (
                        <div>
                            <Accessory
                                key={index}
                                name={list.name}
                                discription={list.discription}
                            />
                        </div>
                    );
                }
                if (list.div_audio === find_ru || list.div_audio === find_en) {
                    return (
                        <div>
                            <Audio
                                key={index}
                                name={list.name}
                                discription={list.discription}
                            />
                        </div>
                    );
                }
                if (list.div_commut === find_ru || list.div_commut === find_en) {
                    return (
                        <div>
                            <Commutation
                                key={index}
                                name={list.name}
                                discription={list.discription}
                            />
                        </div>
                    );
                }
                if (list.div_fiber === find_ru || list.div_fiber === find_en) {
                    return (
                        <div>
                            <FiberSystem
                                key={index}
                                name={list.name}
                                discription={list.discription}
                            />
                        </div>
                    );
                }
                if (list.div_mixing === find_ru || list.div_mixing === find_en) {
                    return (
                        <div>
                            <Mixing
                                key={index}
                                name={list.name}
                                discription={list.discription}
                            />
                        </div>
                    );
                }
                if (list.div_modul === find_ru || list.div_modul === find_en) {
                    return (
                        <div>
                            <ModulSystem
                                key={index}
                                name={list.name}
                                discription={list.discription}
                            />
                        </div>
                    );
                }
                if (list.div_stream === find_ru || list.div_stream === find_en) {
                    return (
                        <div>
                            <Stream
                                key={index}
                                name={list.name}
                                discription={list.discription}
                            />
                        </div>
                    );
                }
                if (list.div_sync === find_ru || list.div_sync === find_en) {
                    return (
                        <div>
                            <SyncSystem
                                key={index}
                                name={list.name}
                                discription={list.discription}
                            />
                        </div>
                    );
                }
                if (list.div_video === find_ru || list.div_video === find_en) {
                    return (
                        <div>
                            <Video
                                key={index}
                                name={list.name}
                                discription={list.discription}
                            />
                        </div>
                    );
                }
                if (list.div_access === find_ru || list.div_access === find_en) {
                    return (
                        <div>
                            <Accessory
                                key={index}
                                name={list.name}
                                discription={list.discription}
                            />
                        </div>
                    );
                }
            })}
        </div>
    );
}

export default connect(
    (state) => ({
        isLanguage: state.app.isLanguage,
    }),
    null
)(ChoiceSolution);
