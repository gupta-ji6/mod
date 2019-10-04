import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Payment } from '../models/payment.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class PaymentService {

  constructor(private http:HttpClient) { }

  private paymentUrl = 'http://localhost:8022/payments';

  public addPayment(payment: Payment) { 
    return this.http.post<Payment>(this.paymentUrl, payment);
  }

}
