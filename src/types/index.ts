export interface DimensionScore {
  id: string;
  name: string;
  shortDesc: string;
  candidateValue: number; // 0 - 100
  teamCurrentValue: number; // 0 - 100
  teamTargetValue: number; // 0 - 100
  impact: 'High Culture-Add' | 'Complementary Gap-Fill' | 'Balanced Core';
  explanation: string;
}

export interface SimulationStep {
  id: number;
  scenarioTitle: string;
  context: string;
  urgency: string;
  options: {
    id: string;
    actionText: string;
    subtext: string;
    dimensionDeltas: Record<string, number>;
    archetypeInfluence: string;
  }[];
}

export interface CandidateArchetype {
  title: string;
  badge: string;
  tagline: string;
  primaryStrength: string;
  blindspotCounterweight: string;
  focusArea: string;
  potentialImpulse: string;
  radarDescription: string;
}
