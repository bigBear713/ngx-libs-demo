import { NgxJsoneditorMode } from "./ngx-jsoneditor-mode.type";
/** jsoneditor的配置信息
 *
 *
 * @export
 */
export class NgxJsoneditorOptions {
    public mode?: NgxJsoneditorMode;
    public search?: boolean;
    public onChange?: () => void;
}
