import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails 
  
  foodDetails = [
    {
      id:1,
      foodName:"S3 AWS",
      foodDetails:"Manage your S3 service with us!",
      foodPrice:100,
      foodImg:"https://miro.medium.com/max/1280/1*B9CIOrxdROHvtdmouQA1_A.png"
    },
    {
      id:2,
      foodName:"EC2 AWS",
      foodDetails:"Maintain your EC2 service with us!",
      foodPrice:250,
      foodImg:"https://logowik.com/content/uploads/images/aws-ec24128.jpg"
    },
    {
      id:3,
      foodName:"DynamoDB AWS",
      foodDetails:"Maintain your DynamoDB database with us!",
      foodPrice:180,
      foodImg:"https://logowik.com/content/uploads/images/aws-dynamodb5235.jpg"
    },
    {
      id:4,
      foodName:"AWS Lambda",
      foodDetails:"Learn with us how to manage AWS Lambda!",
      foodPrice:100,
      foodImg:"https://images.clickittech.com/wp-content/uploads/2018/02/14181540/Clickittech-Amazon-Lambda.png"
    },
    {
      id:5,
      foodName:"AWS Autoscaling",
      foodDetails:"Learn with us how to manage AWS Autoscaling!",
      foodPrice:130,
      foodImg:"https://images.clickittech.com/wp-content/uploads/2017/04/Compute-Amazon-EC2-AutoScaling.png"
    },
    {
      id:6,
      foodName:"Amazon SNS",
      foodDetails:"Learn how to get notifications from the oficial AWS notification system",
      foodPrice:80,
      foodImg:"https://images.clickittech.com/wp-content/uploads/2018/02/14181513/Clickittech-Amazon-SNS.png"
    }
  ]


  

}