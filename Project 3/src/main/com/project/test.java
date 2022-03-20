package com.project;
import com.revature.dao.EmployeeDao;
import com.revature.entity.Employee;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.io.BufferedReader;
import java.io.InputStreamReader;
public class test{
    public static void main(String[] args )
    {

        ApplicationContext context = new ClassPathXmlApplicationContext("config.xml");

        EmployeeDao dao = context.getBean("employeeDao", EmployeeDao.class);
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        boolean flag = true;
        while(flag){
            System.out.println("**************");
            System.out.println("PRESS 1: Add Employee");
            System.out.println("PRESS 2: Get All Employee");
            System.out.println("PRESS 3: Get Employee By Id");
            System.out.println("PRESS 4: Update Employee");
            System.out.println("PRESS 5: Delete Employee");
            System.out.println("PRESS 6: Exit");
            System.out.println("**************");

            try{
                int input = Integer.parseInt(br.readLine());
                switch (input){
                    case 1:
                        // add employee
                        break;
                    case 2:
                        // get all employees
                        break;
                    case 3:
                        // get employee by id
                        break;
                    case 4:
                        // update employee
                        break;
                    case 5:
                        // delete employee
                        break;
                    case 6:
                        // exit
                        System.out.println("Thank you");
                        System.out.println("Bye Bye...");
                        flag = false;
                        break;
                    default:
                        System.out.println("Choose option between 1 - 6");
                }
            }catch (Exception ex){
                System.out.println(ex.getMessage());
            }
        }

    }
}