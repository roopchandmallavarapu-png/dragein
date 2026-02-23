package com.fsad.tribalcraft.controller;

import com.fsad.tribalcraft.dto.OrderRequest;
import com.fsad.tribalcraft.model.CustomerOrder;
import com.fsad.tribalcraft.service.OrderService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    public CustomerOrder placeOrder(@Valid @RequestBody OrderRequest request) {
        return orderService.placeOrder(request);
    }

    @GetMapping
    public List<CustomerOrder> allOrders() {
        return orderService.allOrders();
    }
}
