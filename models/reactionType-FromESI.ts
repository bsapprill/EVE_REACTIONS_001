export interface ReactionType_FromESI {

    description: string,
    group_id: number,
    name: string,
    published: boolean,
    type_id: number,
    
    capacity?: number,
    dogma_attributes?: [{attribute_id: number, value: number}],
    dogma_effects?: [{effect_id: number, is_default: boolean}],
    graphic_id?: number,
    icon_id?: number,
    market_group_id?: number,
    mass?: number,
    packaged_volulme?: number,
    portion_size?: number,
    radius?: number,
    volume?: number
}