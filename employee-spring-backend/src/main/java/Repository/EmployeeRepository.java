package Repository;

import Model.employee;
import org.springframework.data.jpa.repository.JpaRepository;


public interface EmployeeRepository extends JpaRepository<employee, Long>{

}
