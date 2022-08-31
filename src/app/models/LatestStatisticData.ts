export class LatestStatisticData {
  id: number = 0
  warDate: string
  dayNumber: number
  personnel_units: number
  tanks: number
  armoured_fighting_vehicles: number
  artillery_systems: number
  mlrs: number
  aa_warfare_systems: number
  planes: number
  helicopters: number
  vehicles_fuel_tanks: number
  warships_cutters: number
  cruise_missiles: number
  uav_systems: number
  special_military_equip: number
  atgm_srbm_systems: number

  constructor(
    warDate: string,
    dayNumber: number,
    personnel_units: number,
    tanks: number,
    armoured_fighting_vehicles: number,
    artillery_systems: number,
    mlrs: number,
    aa_warfare_systems: number,
    planes: number,
    helicopters: number,
    vehicles_fuel_tanks: number,
    warships_cutters: number,
    cruise_missiles: number,
    uav_systems: number,
    special_military_equip: number,
    atgm_srbm_systems: number) {
    this.warDate = warDate
    this.dayNumber = dayNumber
    this.personnel_units = personnel_units
    this.tanks = tanks
    this.armoured_fighting_vehicles = armoured_fighting_vehicles
    this.artillery_systems = artillery_systems
    this.mlrs = mlrs
    this.aa_warfare_systems = aa_warfare_systems
    this.planes = planes
    this.helicopters = helicopters
    this.vehicles_fuel_tanks = vehicles_fuel_tanks
    this.warships_cutters = warships_cutters
    this.cruise_missiles = cruise_missiles
    this.uav_systems = uav_systems
    this.special_military_equip = special_military_equip
    this.atgm_srbm_systems = atgm_srbm_systems
  }
}