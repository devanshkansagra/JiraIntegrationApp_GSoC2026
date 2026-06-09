import {
    IRead,
    IHttp,
    IPersistence,
    IModify,
} from "@rocket.chat/apps-engine/definition/accessors";
import { IUIKitModalResponse, IUIKitResponse, UIKitViewSubmitInteractionContext } from "@rocket.chat/apps-engine/definition/uikit";
import { JiraApp } from "../../JiraApp";
import { ModalEnum } from "../enums/ModalEnum";
import { ElementEnum } from "../enums/ElementEnum";
import { IRole } from "@rocket.chat/apps-engine/definition/roles";
import { IRoom } from "@rocket.chat/apps-engine/definition/rooms";
import { ProjectMap } from "../persistence/projectMap";
import { sendNotification } from "../helpers/message";

export class ExecuteViewSubmitHandler {
    private context: UIKitViewSubmitInteractionContext;

    constructor(
        protected readonly app: JiraApp,
        context: UIKitViewSubmitInteractionContext,
        protected readonly read: IRead,
        protected readonly http: IHttp,
        protected readonly persistence: IPersistence,
        protected readonly modify: IModify,
    ) {
        this.context = context;
    }

    public async execute(): Promise<IUIKitResponse | IUIKitModalResponse> {
        const { view, user } = this.context.getInteractionData();

        const projectMap = new ProjectMap(
            this.persistence,
            this.read.getPersistenceReader(),
        );

        switch (view.id) {
            case ModalEnum.JIRA_CONNECT_MODAL: {
                const projectKey =
                    view.state &&
                    view.state?.[ElementEnum.JIRA_PROJECT_SELECT_BLOCK]?.[
                        ElementEnum.JIRA_PROJECT_SELECT_ACTION
                    ];

                // context.getInteractionData() give the room value as null
                const title = view.title.text.split(" ")[1].slice(1);
                const room = (await this.read
                    .getRoomReader()
                    .getByName(title)) as IRoom;

                await projectMap.createLink(projectKey, room.id);

                await sendNotification(this.read, this.modify, user, room, "Project linked successfully")
            }
        }
        return { success: true}
    }
}
