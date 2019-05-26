export enum DaysOfWeek {
    TODAY = 'Hoje',
    TOMORROW = 'Amanhã',
    SUNDAY = 'Domingo',
    MONDAY = 'Segunda-feira',
    TUESDAY = 'Terça-feira',
    WEDNESDAY = 'Quarta-feira',
    THURSDAY = 'Quinta-feira',
    FRYDAY = 'Sexta-feira',
    SATURDAY = 'Sábado',
}

export function mapNumberDayToDayOfWeek(day: number) {
    if (day) {
        switch(day) {
            case 0:
                return DaysOfWeek.SUNDAY;
            case 1:
                return DaysOfWeek.MONDAY;
            case 2:
                return DaysOfWeek.TUESDAY;
            case 3:
                return DaysOfWeek.WEDNESDAY;
            case 4:
                return DaysOfWeek.THURSDAY;
            case 5:
                return DaysOfWeek.FRYDAY;
            case 6:
                return DaysOfWeek.SATURDAY;
        }
    }
    return null;
}