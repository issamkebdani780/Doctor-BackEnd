import { Router } from "express";
import { updateProfilSetting, updateCabinetSetting } from '../controller/setting.controller.js'
import { verifyToken } from '../middleware/auth.middleware.js'

const settingRouter = Router();

settingRouter.put('/handleSendProfilSetting', verifyToken, updateProfilSetting)
settingRouter.put('/handleCabinetSetting', verifyToken, updateCabinetSetting)


export default settingRouter;