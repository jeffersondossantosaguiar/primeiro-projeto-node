import Appointment from '../infra/typeorm/entities/Appointment'
import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO'
import IFindAllInDayProviderDTO from '../dtos/IFindAllInDayFromProviderDTO'
import IFindAllInMonthProviderDTO from '../dtos/IFindAllInMonthFromProviderDTO'

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>
  findByDate(date: Date, provider_id: string): Promise<Appointment | undefined>
  findAllInMonthFromProvider(data: IFindAllInMonthProviderDTO): Promise<Appointment[]>
  findAllInDayFromProvider(data: IFindAllInDayProviderDTO): Promise<Appointment[]>
}
