import { VLCStatus } from "./structures/VLCStatus";
import { VLCRequest } from "./structures/VLCRequest";
import { VLCPlaylist } from "./structures/VLCPlaylist";
/**
 * @interface VLCCredentials
 * @property {String} address
 * @property {String} password
 * @property {String|Number} port
 * @description This is standard login credentials for accessing VLCs' HTTP endpoint.
 */
export interface VLCCredentials {
    address: string;
    password: string;
    port: number | string;
}
/**
 * @enum VLCCommand
 * @description These are all the available commands that the HTTP server can take. These commands were pulled from the
 * source code and was last updated September 10th, 2019.
 * @link https://github.com/videolan/vlc/blob/master/share/lua/intf/modules/httprequests.lua
 * @property {String} in_play
 * @property {String} addsubtitle
 * @property {String} in_enqueue
 * @property {String} pl_play
 * @property {String} pl_pause
 * @property {String} pl_forcepause
 * @property {String} pl_forceresume
 * @property {String} pl_stop
 * @property {String} pl_next
 * @property {String} pl_previous
 * @property {String} pl_delete
 * @property {String} pl_empty
 * @property {String} pl_sort
 * @property {String} pl_random
 * @property {String} pl_loop
 * @property {String} pl_repeat
 * @property {String} pl_sd_add
 * @property {String} pl_sd_remove
 * @property {String} fullscreen
 * @property {String} snapshot
 * @property {String} volume
 * @property {String} seek
 * @property {String} key
 * @property {String} audiodelay
 * @property {String} rate
 * @property {String} subdelay
 * @property {String} aspectratio
 * @property {String} preamp
 * @property {String} equalizer
 * @property {String} enableeq
 * @property {String} setpreset
 * @property {String} title
 * @property {String} chapter
 * @property {String} audio_track
 * @property {String} video_track
 * @property {String} subtitle_track
 */
export declare const enum VLCCommand {
    in_play = "in_play",
    addsubtitle = "addsubtitle",
    in_enqueue = "in_enqueue",
    pl_play = "pl_play",
    pl_pause = "pl_pause",
    pl_forcepause = "pl_forcepause",
    pl_forceresume = "pl_forceresume",
    pl_stop = "pl_stop",
    pl_next = "pl_next",
    pl_previous = "pl_previous",
    pl_delete = "pl_delete",
    pl_empty = "pl_empty",
    pl_sort = "pl_sort",
    pl_random = "pl_random",
    pl_loop = "pl_loop",
    pl_repeat = "pl_repeat",
    pl_sd_add = "pl_sd_add",
    pl_sd_remove = "pl_sd_remove",
    fullscreen = "fullscreen",
    snapshot = "snapshot",
    volume = "volume",
    seek = "seek",
    key = "key",
    audiodelay = "audiodelay",
    rate = "rate",
    subdelay = "subdelay",
    aspectratio = "aspectratio",
    preamp = "preamp",
    equalizer = "equalizer",
    enableeq = "enableeq",
    setpreset = "setpreset",
    title = "title",
    chapter = "chapter",
    audio_track = "audio_track",
    video_track = "video_track",
    subtitle_track = "subtitle_track"
}
/**
 * @param {VLCCredentials} details
 * @param {VLCCommand} vlcCommand
 * @param {String[]} query
 * @returns {Promise<VLCStatus>}
 */
export declare function command(details: VLCCredentials, vlcCommand: VLCCommand, query?: string[] | undefined): Promise<VLCStatus>;
/**
 * @param {VLCCredentials} details
 * @returns {Promise<VLCStatus>}
 */
export declare function getStatus(details: VLCCredentials): Promise<VLCStatus>;
/**
 * @param {VLCCredentials} details
 * @returns {Promise<VLCPlaylist>}
 */
export declare function getPlaylist(details: VLCCredentials): Promise<VLCPlaylist>;
/**
 * @param {URL} address
 * @param {VLCCredentials} details
 * @returns {VLCRequest}
 * @private
 */
export declare function _request(address: URL, details: VLCCredentials): Promise<VLCRequest>;
//# sourceMappingURL=Requester.d.ts.map