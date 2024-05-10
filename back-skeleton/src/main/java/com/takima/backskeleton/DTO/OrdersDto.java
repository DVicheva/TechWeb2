package com.takima.backskeleton.DTO;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrdersDto {
    private Long orderId;
    private Long userId;
    private LocalDateTime orderDate;
    private String status;
    private String details;
    private BigDecimal price;
}