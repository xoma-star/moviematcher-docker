import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PbModule } from './pb/pb.module';
import { UserModule } from './user/user.module';
import { VkModule } from './vk/vk.module';
import { ImageModule } from './image/image.module';
import { RedisModule } from './redis/redis.module';
import * as path from 'path';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
    }),
    MoviesModule,
    PbModule,
    UserModule,
    VkModule,
    ImageModule,
    RedisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
