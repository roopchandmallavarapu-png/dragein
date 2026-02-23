package com.fsad.tribalcraft.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class OrderRequest {
    @NotBlank
    private String customerName;

    @Email
    @NotBlank
    private String customerEmail;

    @NotNull
    private Long productId;

    @NotNull
    @Min(1)
    private Integer quantity;

    public String getCustomerName() { return customerName; }
    public String getCustomerEmail() { return customerEmail; }
    public Long getProductId() { return productId; }
    public Integer getQuantity() { return quantity; }

    public void setCustomerName(String customerName) { this.customerName = customerName; }
    public void setCustomerEmail(String customerEmail) { this.customerEmail = customerEmail; }
    public void setProductId(Long productId) { this.productId = productId; }
    public void setQuantity(Integer quantity) { this.quantity = quantity; }
}
