import React from 'react'
import MissionInfo from './MissionInfo'
import WasteToWealthHighlights from './WasteToWealthHighlights'
import TechnologyDeployment from './TechnologyDeployment'
import InnovativeChallenge from './InnovativeChallenge'
import TechRepo from './TechRepo'
import Policies from './Policies'
import TeamDetail from './TeamDetail'
import { cards } from '../../staticdata'

const AnnexureHome = () => {
    return (
        <div>
            <MissionInfo />
            <WasteToWealthHighlights />
            <TechnologyDeployment />
            <InnovativeChallenge />
            <TechRepo />
            <Policies />
            <TeamDetail cards={cards} />
        </div>
    )
}

export default AnnexureHome