export interface DogmaEffect_FromESI {
    effect_id: number,

    description?: string,
    disallow_auto_repeat?: boolean,
    discharge_attribute_id?: number,
    display_name?: string,
    duration_attribute_id?: number,
    effect_category?: number,
    electronic_chance?: boolean,
    falloff_attribute_id?: number,
    icon_id?: number,
    is_assistance?: boolean,
    is_offensive?: boolean,
    is_warp_safe?: boolean,
    modifiers?: [{domain?: string, effect_id?: number, func: string, modified_attribute_id?: number, modifying_attribute_id?: number, operator?: number}]
    name?: string,
    post_expression?: number,
    pre_expression?: number,
    published?: boolean,
    range_attribute_id?: number,
    range_chance?: boolean,
    tracking_speed_attribute_id?: number
}