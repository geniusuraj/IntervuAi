package com.IntervuAi.model;

import java.time.LocalDateTime;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "user")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@NotBlank(message = "FirstName cannot be null or blank")
	@Size(min = 2, max = 20, message = "Size of the first name should be b/w 3-20 charecter.")
	@Column(nullable = false, length = 30)
	private String firstName;

	@NotBlank(message = "LastName cannot be null or blank")
	@Size(min = 2, max = 20, message = "Size of the first name should be b/w 3-20 charecter.")
	@Column(nullable = false, length = 30)
	private String lastName;

	@NotNull(message = "Please provide email")
	@Email(regexp = "[a-z0-9.]+@[a-z0-9.]+\\.[a-z]{2,3}", flags = Pattern.Flag.CASE_INSENSITIVE, message = "Please provide a valid email")
	@Column(nullable = false, length = 30)
	private String email;

	@Column(nullable = false)
	private String password;
	
	@Pattern(regexp = "[6-9][0-9]{9}", message = "please provide 10 digit Indian mobile number")
	@Column(nullable = false, length = 10)
	private String mobileNumber;

	@CreationTimestamp
	@Column(updatable = false)
	private LocalDateTime createdAt;

	@UpdateTimestamp
	@Column(insertable = false)
	private LocalDateTime lastModifiedDate;
	
	@OneToMany(mappedBy = "user" )
	private List<Interview> interviews;
	
	@OneToMany(mappedBy = "user" )
	private List<FeedBack> feedBacks; 
}
