import {Schema, model} from 'mongoose';
import { DeliveryStatus } from '@/constants/deliveryStatus';

const orderSchema = new Schema({
    timestamp: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: DeliveryStatus,
      default: DeliveryStatus.PREPARING,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    menus: [
      {
        menu: {
          type: Schema.Types.ObjectId,
          ref: 'Menu',
          required: true,
        },
        count: {
          type: Number,
          required: true,
        },
        options: [
          {
            title: String,
            price: Number,
          },
        ],
      },
    ],
    store: {
      type: Schema.Types.ObjectId,
      ref: 'Store',
      required: true,
    },
    review: {
      type: Schema.Types.ObjectId,
      ref: 'Review',
    },
  })
  
  export const Order = model('Order', orderSchema)